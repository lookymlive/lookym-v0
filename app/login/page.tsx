'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400">
          Bienvenido a Video Upload App
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Inicia sesión para comenzar a subir tus videos
        </p>
        <button
          onClick={() => signIn('google', { callbackUrl: '/profile' })}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
        >
          <FcGoogle className="w-6 h-6 mr-2" />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  )
}