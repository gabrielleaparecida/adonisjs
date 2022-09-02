import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ClosetVirtual extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public itensId: string

  @column()
  public looksId: string

  @column ()
  public corId: string 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
