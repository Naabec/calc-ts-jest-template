import { UserLatvian } from './user-latvia'
import { BaseContract } from './base-contract'

export class ContractLat extends BaseContract{

  constructor(title: string,) {
    super(title)
    this.signed = false
  }

  signed: boolean

  signLat(user: UserLatvian){
    if(user.activateEParakstsForLatvia){
      this.signed= true
    }
    else {
      user.activateEParakstsForLatvia = false
    }
  }
}