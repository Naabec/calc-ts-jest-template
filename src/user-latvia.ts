import { BaseBalticUser } from './base-class'
import { name } from 'ts-jest/dist/transformers/hoist-jest'

export class UserLatvian extends BaseBalticUser {
  activateEParakstsForLatvia: undefined | boolean

  constructor(
    name: string,
    surName: string,
    age: number,
    personalCode: number,
    phone: number,
    address: string,
    activateEParakstsForLatvia: boolean | undefined,
  ) {
    super(name, surName, age, personalCode, phone, address)
    this.activateEParakstsForLatvia = undefined
  }
}
