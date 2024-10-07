import { BaseBalticUser } from './base-class'

export class UserEstonian extends BaseBalticUser {
  mobileIDAuthorization: undefined | boolean

  constructor(
    name: string,
    surName: string,
    age: number,
    personalCode: number,
    phone: number,
    address: string,

  ) {
    super(name, surName, age, personalCode, phone, address)
    this.mobileIDAuthorization = undefined
  }
}
