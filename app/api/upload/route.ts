import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  const session = await auth()

  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File
  const title = formData.get('title') as string
  const description = formData.get('description') as string

  if (!file) {
    return NextResponse.json({ error: 'No se ha subido ningún archivo' }, { status: 400 })
  }

  try {
    const fileBuffer = await file.arrayBuffer()
    const mime = file.type
    const encoding = 'base64'
    const base64Data = Buffer.from(fileBuffer).toString('base64')
    const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(fileUri, {
        resource_type: 'video',
        folder: 'store_videos',
      }, (error, result) => {
        if (error) reject(error)
        else resolve(result)
      })
    })

    // Aquí deberías guardar la información del video en tu base de datos
    // Por ejemplo:
    // await dbConnect()
    // const video = new VideoModel({
    //   title,
    //   description,
    //   url: uploadResult.secure_url,
    //   userId: session.user.id
    // })
    // await video.save()

    return NextResponse.json({ message: 'Video subido exitosamente', video: uploadResult })
  } catch (error) {
    console.error('Error de subida:', error)
    return NextResponse.json({ error: 'Error al subir el video' }, { status: 500 })
  }
}