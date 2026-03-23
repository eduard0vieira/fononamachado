export function isRequiredFilled(value: string): boolean {
  return value.trim().length > 0
}

export function isValidCpf(value: string): boolean {
  return value.replace(/\D/g, '').length === 11
}

export function isValidCep(value: string): boolean {
  return value.replace(/\D/g, '').length === 8
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}
