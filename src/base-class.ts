
export class BaseBalticUser {
  name: string
  surName: string
  age: number
  personalCode: number
  phone: number
  address: string

  constructor(
    name: string,
    surName: string,
    age: number,
    personalCode: number,
    phone: number,
    address: string,
  ) {
    this.name = name
    this.surName = surName
    this.age = age
    this.personalCode = personalCode
    this.phone = phone
    this.address = address
  }
}
