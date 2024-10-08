import { UserEstonian } from '../src/user-estonian'
import { ContractEst } from '../src/contract-est'
import { UserLatvian } from '../src/user-latvia'
import { ContractLat } from '../src/contract-lat'

describe('Contract signing logic - Estonia', () => {
  let userEst: UserEstonian;
  let contractEst: ContractEst;

  beforeEach(() => {
    userEst = new UserEstonian("John", "Doe",18,38712030260,37256710032,'Kollane 8 - 34');
    contractEst = new ContractEst("Employment Contract");
  });

  it('should not allow signing if Mobile ID authorization is not activated', () => {
    userEst.mobileIDAuthorization = false; // Mobile ID not authorized
    contractEst.signEst(userEst)
    expect(contractEst.signed).toBe(false);
  });

  it('should allow signing if Mobile ID authorization is activated', () => {
    userEst.mobileIDAuthorization= true; // Activate Mobile ID
    contractEst.signEst(userEst);
    expect(contractEst.signed).toBe(true);
  });
});


describe('Contract signing logic - Latvia', () => {
  let userLat: UserLatvian;
  let contractLat: ContractLat;

  beforeEach(() => {
    userLat = new UserLatvian("Igor", "Perevoztskikov",36,38700000,3725245532,'Kollane 18 - 34');
    contractLat = new ContractLat("Employment Contract");
  });

  it('should not allow signing if Mobile ID authorization is not activated', () => {
    userLat.activateEParakstsForLatvia = false; // Mobile ID not authorized
    contractLat.signLat(userLat)
    expect(contractLat.signed).toBe(false);
  });

  it('should allow signing if Mobile ID authorization is activated', () => {
    userLat.activateEParakstsForLatvia= true; // Activate Mobile ID
    contractLat.signLat(userLat);
    expect(contractLat.signed).toBe(true);
  });
});