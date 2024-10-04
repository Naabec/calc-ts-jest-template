import { User } from './user'

export class Processor {
  giveConsent(user: User): void {
    user.consentGiven = true
  }
  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }
  checkUserAge(user: User): boolean {
    return user.age !== undefined && user.age > 18;
  }
  revokeConsent(user: User): void {
    user.consentGiven = false
  }
}
