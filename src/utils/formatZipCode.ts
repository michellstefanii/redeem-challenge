export function formatZipCode(cep: string): string {
  const cleaned = cep.replace(/\D/g, "");

  if (cleaned.length === 8) {
    return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
  }
  return cep;
}
