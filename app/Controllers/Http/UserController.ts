import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserController {
  public async index({}: HttpContextContract) {
    const user = await User.all()
    return user
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const user = new User()
    user.email = request.input('email')
    user.password = request.input('password')
    const saveData = await user.save()
    if (saveData) {
      return {
        message: 'Usuario cadastrado com sucesso',
      }
    } else {
      return {
        message: 'Erro ao cadastrar, tente novamente mais tarde',
      }
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
