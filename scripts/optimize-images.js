import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const GALLERY_SRC = 'public/gallery'
const THUMB_WIDTH = 900   // grid thumbnails
const WEBP_QUALITY = 82
const JPEG_QUALITY = 85

async function optimizeGallery() {
  const files = (await readdir(GALLERY_SRC))
    .filter(f => /\.(jpe?g|png)$/i.test(f) && !f.endsWith('-opt.jpg'))

  if (files.length === 0) {
    console.log('No images found in', GALLERY_SRC)
    return
  }

  for (const file of files) {
    const src = path.join(GALLERY_SRC, file)
    const base = path.parse(file).name

    const thumbDir = path.join(GALLERY_SRC, 'thumbs')
    if (!existsSync(thumbDir)) await mkdir(thumbDir, { recursive: true })

    // .rotate() reads EXIF orientation and bakes it into pixels, then strips
    // the EXIF tag. Needed because WebP/JPEG output strips EXIF by default,
    // which would leave raw (rotated) pixels with no orientation hint.

    // Full-size WebP (for lightbox)
    const fullWebp = path.join(GALLERY_SRC, `${base}.webp`)
    await sharp(src)
      .rotate()
      .webp({ quality: WEBP_QUALITY })
      .toFile(fullWebp)

    // Re-compress original JPEG as fallback
    const fullJpeg = path.join(GALLERY_SRC, `${base}-opt.jpg`)
    await sharp(src)
      .rotate()
      .jpeg({ quality: JPEG_QUALITY, progressive: true })
      .toFile(fullJpeg)

    // Thumbnail WebP (for grid)
    const thumbWebp = path.join(thumbDir, `${base}.webp`)
    await sharp(src)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(thumbWebp)

    // Thumbnail JPEG fallback
    const thumbJpeg = path.join(thumbDir, `${base}.jpg`)
    await sharp(src)
      .rotate()
      .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, progressive: true })
      .toFile(thumbJpeg)

    const origSize = (await import('fs')).statSync(src).size
    const fullSize = (await import('fs')).statSync(fullWebp).size
    const thumbSize = (await import('fs')).statSync(thumbWebp).size

    console.log(
      `${file}: ${kb(origSize)} → full WebP ${kb(fullSize)} · thumb WebP ${kb(thumbSize)}`
    )
  }
}

const kb = n => `${Math.round(n / 1024)}KB`

optimizeGallery().catch(console.error)
