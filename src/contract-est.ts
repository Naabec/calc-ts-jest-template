import { BaseContract } from './base-contract'
import { UserEstonian } from './user-estonian'

export class ContractEstonia extends BaseContract {
  signed: boolean

  constructor(title: string) {
    super(title)
    this.signed = false
  }

  signEst(user: UserEstonian) {
    this.signed = !!user.mobileIDAuthorization;
  }
}
