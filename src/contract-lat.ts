import { BaseContract } from './base-contract'
import { UserLatvian } from './user-latvian'

export class ContractLatvia extends BaseContract {
  signed: boolean

  constructor(title: string) {
    super(title)
    this.signed = false
  }

  signLat(user: UserLatvian) {
    this.signed = !!user.activateEParakstsForLatvia;
  }
}
