import { createUserAuthService } from '../../services/auth/createUser.service'

export default async ({ email, password } : { email: string, password: string }) => {
  const { data, error } = await createUserAuthService({
    email, password
  })

  if (error) throw error

  return data
}
