import mongoose from 'mongoose'
import dbConnect from '@/lib/db'

// Asegúrate de llamar a dbConnect antes de definir el modelo
dbConnect()

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Por favor proporciona un título para el video'],
    maxlength: [60, 'El título no puede ser más largo de 60 caracteres']
  },
  description: {
    type: String,
    required: false,
    maxlength: [200, 'La descripción no puede ser más larga de 200 caracteres']
  },
  url: {
    type: String,
    required: [true, 'Por favor proporciona la URL del video']
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Por favor proporciona el ID del usuario']
  }
}, {
  timestamps: true
})

export default mongoose.models.Video || mongoose.model('Video', VideoSchema)