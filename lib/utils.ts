import bcrypt from "bcryptjs";


import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const saltAndHashPassword = async (password: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10); // Síncrono
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export function convertToISO8601(dateString: string) {
  // Validação básica da string de data
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return null
  }

  // Criação do objeto de data no formato ISO-8601 com hora padrão
  const isoDateTime = new Date(`${dateString}T00:00:00Z`);

  // Verificação de validade da data
  if (isNaN(isoDateTime.getTime())) {
    throw new Error('Data inválida fornecida.');
  }

  return isoDateTime.toISOString();
}

export function convertFromISO8601(isoDateTime: any) {
  try {
    // Verifica se a entrada é uma string válida no formato ISO
    const date = new Date(isoDateTime);

    // Verifica se a data é inválida
    if (isNaN(date.getTime())) {
      throw new Error('Data ISO-8601 inválida fornecida.');
    }

    // Formata a data no formato YYYY-MM-DD
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}
