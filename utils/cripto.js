import { randomBytes } from "crypto";

export function generateSecureToken(length = 115) {
  const randomCode = randomBytes(length).toString("base64");
  return randomCode;
  // return "Certificate?Key=" + randomCode + "&FitnessExamId=0";
}
