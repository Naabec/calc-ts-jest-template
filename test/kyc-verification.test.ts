import { UserEstonian } from '../src/user-estonian'
import { UserLatvian } from '../src/user-latvian'
import { KycVerification } from '../src/kyc-verification'

describe('KYC Verification for Estonian citizens', () => {
  let userEst: UserEstonian
  let kyc: KycVerification
  beforeEach(() => {
    userEst = new UserEstonian('Aleksei', 'Golov', 19, 41421412421412, 387123032312, 'Kollane 9')
    kyc = new KycVerification()
  })
  test('Verify that the mobileIDAuthorization field is undefined by default', () => {
    expect(userEst.mobileIDAuthorization).toBeUndefined()
  })
  test("Verify that the activateMobileIDForEstonia method activates Mobile ID if the user's age is greater than 18.", () => {
    kyc.activateMobileIDForEstonia(userEst)
    expect(userEst.mobileIDAuthorization).toBe(true)
  })
  test('Verify that after activation, the mobileIDAuthorization field changes to true.', () => {
    kyc.activateMobileIDForEstonia(userEst)
    expect(userEst.mobileIDAuthorization).toBe(true)
  })
  test('Verify that attempting to activate Mobile ID for a user younger than 16 throws an error.', () => {
    userEst.age = 14
    expect(() => {
      kyc.activateMobileIDForEstonia(userEst)
    }).toThrow('User is too young')
  })
})

describe('KYC Verification for Latvian citizens', () => {
  let userLat: UserLatvian
  let kyc: KycVerification
  beforeEach(() => {
    userLat = new UserLatvian('Dmitri', 'Bobrov', 19, 666666666, 37267723123, 'Kollane 19')
    kyc = new KycVerification()
  })
  test('Verify that the mobileIDAuthorization field is undefined by default', () => {
    expect(userLat.activateEParakstsForLatvia).toBeUndefined()
  })
  test("Verify that the activateMobileIDForEstonia method activates Mobile ID if the user's age is greater than 18.", () => {
    kyc.activateEParakstsForLatvia(userLat)
    expect(userLat.activateEParakstsForLatvia).toBe(true)
  })
  test('Verify that after activation, the mobileIDAuthorization field changes to true.', () => {
    kyc.activateEParakstsForLatvia(userLat)
    expect(userLat.activateEParakstsForLatvia).toBe(true)
  })
  test('Verify that attempting to activate Mobile ID for a user younger than 16 throws an error.', () => {
    userLat.age = 14
    expect(() => {
      kyc.activateEParakstsForLatvia(userLat)
    }).toThrow('User is too young')
  })
})
