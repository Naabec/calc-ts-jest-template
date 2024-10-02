import { generateEstoniaId, generateLatviaId, generateLithuaniaId } from '../src/idGenerator'

describe('Estonia/Latvia/Lithuania ID Generator Functions', () => {
  test('generateEstoniaId starts with EST-', () => {
    const id = generateEstoniaId()
    expect(id.startsWith('EST-')).toBe(true)
  })

  test('generateLatviaId starts with LVA-', () => {
    const id = generateLatviaId()
    expect(id.startsWith('LVA-')).toBe(true)
  })

  test('generateLithuaniaId starts with LTU-', () => {
    const id = generateLithuaniaId()
    expect(id.startsWith('LTU-')).toBe(true)
  })

  test('Verify that IDs should be of length 8', () => {
    const estId = generateEstoniaId()
    const latId = generateLatviaId()
    const litId = generateLithuaniaId()
    expect(estId.length).toBe(8)
    expect(latId.length).toBe(8)
    expect(litId.length).toBe(8)
  })

  test('IDs should follow the correct format with a prefix and 4 digits', () => {
    const estId = generateEstoniaId()
    const latId = generateLatviaId()
    const litId = generateLithuaniaId()
    expect(/EST-\d{4}/.test(estId)).toBe(true)
    expect(/LVA-\d{4}/.test(latId)).toBe(true)
    expect(/LTU-\d{4}/.test(litId)).toBe(true)
  })
})
