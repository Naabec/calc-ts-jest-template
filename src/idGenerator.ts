export function generateEstoniaId(): string {
  const randomDigits = Math.floor(1000 + Math.random() * 9000)
  return `EST-${randomDigits}`
}

export function generateLatviaId(): string {
  const randomDigits = Math.floor(1000 + Math.random() * 9000)
  return `LVA-${randomDigits}`
}

export function generateLithuaniaId(): string {
  const randomDigits = Math.floor(1000 + Math.random() * 9000)
  return `LTU-${randomDigits}`
}
