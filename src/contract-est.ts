import { UserEstonian } from './user-estonian'
import { BaseContract } from './base-contract'

export class ContractEst extends BaseContract{

  constructor(title: string,) {
    super(title)
    this.signed = false
  }

  signed: boolean


  signEst(user: UserEstonian){
    if(user.mobileIDAuthorization){
      this.signed= true
    }
    else {
      user.mobileIDAuthorization = false
    }
  }

}