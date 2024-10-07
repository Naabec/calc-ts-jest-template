export class User {
  name: string
  surName: string
  phone: string
  address: string
  consentGiven: boolean | undefined
  age: number | undefined

  constructor(name: string, surName: string, age: number, phone: string, address: string) {
    this.name = name
    this.surName = surName
    this.phone = phone
    this.address = address
    this.age = age
  }
}
