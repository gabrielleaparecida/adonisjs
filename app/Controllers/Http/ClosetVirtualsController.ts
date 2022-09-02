import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Request from "@ioc:Adonis/Core/Request";
import ClosetVirtual from "../../Models/ClosetVirtual";
import ClosetVirtual from "../../Models/ClosetVirtual";
import ClosetVirtualValidator from "../../Validators/ClosetVirtualValidator";

export default class ClosetVirtualsController {
  public async index ({ }: HttpContextContract){
  const ClosetVirtual = await ClosetVirtual.all()
  return ClosetVirtual

  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const ClosetVirtual = await ClosetVirtual.findOrFail(params.id)
      return ClosetVirtual
    } catch (error) {
      response.status(400).send("ClosetVirtual não encontrado!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { name } = await request.validate(ClosetVirtualValidator)
    try {
      const ClosetVirtual = await ClosetVirtual.findOrFail(params.id)
      ClosetVirtual.name = name
      await ClosetVirtual.save()
      return ClosetVirtual

    } catch (error) {
      response.status(400).send("ClosetVirtual não encontrado!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const ClosetVirtual = await ClosetVirtual.findOrFail(params.id)
      await ClosetVirtual.delete()
      return ClosetVirtual
    } catch (error) {
      response.status(400).send("ClosetVirtual não encontrado!!!")
    }
  }
}

   