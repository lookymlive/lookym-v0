# Lookym V0 (0.1.0)
> .[!NOTE]
> Es a partir de aqui que comienza la funcion
> .[!TIP]
> Ir agregando desde aqui 
>
> .[!IMPORTANT] Hacerlo con Nextjs y nextauth V5 App Router
>
> .[!CAUTION]

lookym/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts       # Configuración de NextAuth (autenticación)
│   │   ├── businesses/
│   │   │   └── route.ts           # API para negocios (GET, POST, PUT, DELETE)
│   │   ├── videos/
│   │   │   └── route.ts           # API para videos (GET, POST, PUT, DELETE)
│   │   ├── comments/
│   │   │   └── route.ts           # API para comentarios (GET, POST)
│   ├── layout.tsx                 # Diseño base de la aplicación
│   ├── page.tsx                   # Página principal
│   ├── dashboard/
│   │   └── page.tsx               # Página de dashboard protegida (usuarios autenticados)
│   ├── businesses/
│   │   └── [businessId]/
│   │       └── page.tsx           # Página de detalles de negocio con videos, mapa, etc.
│   ├── videos/
│   │   └── [videoId]/
│   │       └── page.tsx           # Página de detalle de un video individual
├── prisma/
│   ├── schema.prisma              # Esquema de Prisma (definición de la base de datos)
├── public/
│   └── (imágenes, íconos, etc.)
├── styles/
│   └── globals.css                # Estilos globales para la app
├── components/
│   ├── Navbar.tsx                 # Componente para la barra de navegación
│   ├── Footer.tsx                 # Componente para el pie de página
│   ├── VideoCard.tsx              # Componente para mostrar videos
│   ├── BusinessCard.tsx           # Componente para mostrar negocios
│   ├── CommentSection.tsx         # Componente de la sección de comentarios
│   └── GoogleMap.tsx              # Componente para integrar Google Maps
├── .env                           # Variables de entorno (credenciales de BD, API keys)
├── .eslintrc.json                 # Configuración de ESLint para mantener el código limpio
├── .prettierrc                    # Configuración de Prettier para formato de código
├── next.config.js                 # Configuración de Next.js
├── package.json                   # Dependencias y scripts de NPM
├── tsconfig.json                  # Configuración de TypeScript
└── README.md                      # Documentación del proyecto
