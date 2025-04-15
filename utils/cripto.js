import { randomBytes } from "crypto";

export function generateSecureToken(length = 64) {
  const randomCode = randomBytes(length).toString("base64url").slice(0, length);
  return "certificatekeya" + randomCode;
}
