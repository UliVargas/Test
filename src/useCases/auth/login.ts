import { loginService } from '../../services/auth/login.service'

interface Props {
  email: string
  password: string
}

export default async ({ email, password }: Props) => {
  const { data, error } = await loginService({
    email,
    password
  })

  if (error) {
    throw error
  }

  return data
}
