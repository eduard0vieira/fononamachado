export function maskCpf(value: string): string {
  const digits = value.replace(/\D/g, '').substring(0, 11)
  if (digits.length > 9) return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4')
  if (digits.length > 6) return digits.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3')
  if (digits.length > 3) return digits.replace(/(\d{3})(\d{0,3})/, '$1.$2')
  return digits
}

export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').substring(0, 11)
  if (digits.length > 10) return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  if (digits.length > 6) return digits.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3')
  if (digits.length > 2) return digits.replace(/(\d{2})(\d{0,5})/, '($1) $2')
  return digits
}

export function maskCep(value: string): string {
  const digits = value.replace(/\D/g, '').substring(0, 8)
  if (digits.length > 5) return digits.replace(/(\d{5})(\d{0,3})/, '$1-$2')
  return digits
}
