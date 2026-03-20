export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name || name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
