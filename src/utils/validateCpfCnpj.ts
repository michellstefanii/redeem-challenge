import { cnpj, cpf } from "cpf-cnpj-validator";

export function validateCpfCnpj(value: string) {
  if (value.length === 11) {
    return validateCPF(value);
  } else if (value.length === 14) {
    return validateCNPJ(value);
  }
  return false;
}

export const validateCPF = (value: string) => {
  const _cpf = cpf.strip(value);

  return cpf.isValid(_cpf);
};

export const validateCNPJ = (value: string) => {
  const _cnpj = cnpj.strip(value);
  return cnpj.isValid(_cnpj);
};
