import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Request from "@ioc:Adonis/Core/Request";
import ClosetVirtual from "../../Models/ClosetVirtual";
import ClosetVirtualValidator from "../../Validators/ClosetVirtualValidator";

export default class ClosetVirtualsController {
  public async index ({ }: HttpContextContract){
  const closetVirtual = await ClosetVirtual.all()
  return closetVirtual

  }
  public async store({request}:HttpContextContract){
    const closetvirtual = await request.validate(closetvirtual)
    const ClosetVirtual = await closetvirtual
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const closetVirtual = await ClosetVirtual.findOrFail(params.id)
      return closetVirtual
    } catch (error) {
      response.status(400).send("ClosetVirtual não encontrado!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { nome } = await request.validate(ClosetVirtualValidator)
    try {
      const closetVirtual = await ClosetVirtual.findOrFail(params.id)
      closetVirtual.nome = nome
      await closetVirtual.save()
      return closetVirtual

    } catch (error) {
      response.status(400).send("ClosetVirtual não encontrado!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const closetVirtual = await ClosetVirtual.findOrFail(params.id)
      await closetVirtual.delete()
      return closetVirtual
    } catch (error) {
      response.status(400).send("ClosetVirtual não encontrado!!!")
    }
  }
}

   