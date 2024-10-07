import { UserEstonian } from './user-estonian'
import { UserLatvian } from './user-latvia'

export class KycVerification {
  activateMobileIDForEstonia(user: UserEstonian) {
    if (user.age < 18) {
      throw new Error('User is too young')
    } else {
      user.mobileIDAuthorization = true
    }
  }
  activateEParakstsForLatvia(user: UserLatvian) {
    if (user.age < 16) {
      throw new Error('User is too young')
    } else {
      user.activateEParakstsForLatvia = true
    }
  }
}
