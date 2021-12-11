import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const { email, password } = request.all()


    const token = await auth.attempt(email, password, {
      expiresIn: '1 day',
    })
    return token
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
