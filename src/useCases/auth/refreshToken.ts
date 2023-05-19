import { refreshTokenService } from '../../services/auth/refreshToken.service'

export default async (refreshToken: string) => {
  const { data, error } = await refreshTokenService(refreshToken)

  if (error) throw error

  return data
}
