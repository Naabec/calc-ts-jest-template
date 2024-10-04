import { User } from '../src/user'
import { Processor } from '../src/processor'

describe('Tests for consent ', () => {
  let user1: User
  let processor1: Processor
  beforeEach(() => {
    user1 = new User('Aleksei', 'Golov', 0, '+37256710032', 'Kollane 8 - 34')
    processor1 = new Processor()
  })
  test('Not processed user should initially have undefined consent', () => {
    expect(user1.consentGiven).toBeUndefined()
  })
  test('Processor can give consent to user', () => {
    processor1.giveConsent(user1)
    expect(user1.consentGiven).toBe(true)
  })

  test('Not processed user should initially have undefined consent', () => {
    expect(processor1.checkConsent(user1)).toBe(false)
  })

  test('Should not give consent if user is younger than 18', () => {
    user1.age = 17
    expect(processor1.checkUserAge(user1)).toBe(false)
  })

  test('Should give consent if user is older than 18', () => {
    user1.age = 20
    const result = processor1.checkUserAge(user1)

    expect(result).toBe(true)
  })

  test('Should revoke consent', () => {
    user1.age = 20
    processor1.giveConsent(user1)
    expect(user1.consentGiven).toBe(true)

    processor1.revokeConsent(user1)
    expect(user1.consentGiven).toBe(false)
  })
})
