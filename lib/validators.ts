export function isRequiredFilled(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidCpf(value: string): boolean {
  const cpf = value.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  for (let checkDigit = 9; checkDigit <= 10; checkDigit++) {
    let sum = 0;
    for (let i = 0; i < checkDigit; i++) {
      sum += Number(cpf[i]) * (checkDigit + 1 - i);
    }
    const expected = ((sum * 10) % 11) % 10;
    if (expected !== Number(cpf[checkDigit])) return false;
  }

  return true;
}

export function isValidCep(value: string): boolean {
  return value.replace(/\D/g, "").length === 8;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
