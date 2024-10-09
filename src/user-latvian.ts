import { BaseBalticUser } from './base-class'

export class UserLatvian extends BaseBalticUser {
  activateEParakstsForLatvia: undefined | boolean

  constructor(
    name: string,
    surName: string,
    age: number,
    personalCode: number,
    phone: number,
    address: string,
  ) {
    super(name, surName, age, personalCode, phone, address)
    this.activateEParakstsForLatvia = undefined
  }
}
