import { supabase } from '../../lib/supabase/client'

export const deleteUnconfirmedUsers = async () => {
  const unconfirmedUsers = await supabase
    .from('auth.users')
    .select('*')
    .eq('email_verified', false)
    .then((response) => response.data)

  const currentTime: any = new Date()

  console.log(unconfirmedUsers)

  unconfirmedUsers.forEach(async (user) => {
    const createdAt: any = new Date(user.created_at)
    const timeDifference = currentTime - createdAt
    const timeThreshold = 30 * 1000 // 24 * 60 * 60 * 1000 // 24 horas en milisegundos

    if (timeDifference > timeThreshold) {
      // Eliminar usuario
      await supabase.auth.admin.deleteUser(user.id)
      console.log(`Usuario eliminado: ${user.email}`)
    }
  })
}
