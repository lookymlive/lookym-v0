

export { auth as middleware } from "@/auth"



// Asegúrate de que el middleware se ejecute solo en las rutas que quieres proteger
// Todas las url que empiecen con /admin o /profile pasan por este middleware 
// Aqui se incluyen las rutas que queremos proteger con el middleware de autenticación 
export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/upload/ :path*"],
}