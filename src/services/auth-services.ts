import { AuthResponse } from "@/types/auth-response";

const API_URL = "http://localhost:8080/api";

// login
export async function signIn(
  email: string,
  password: string,
): Promise<AuthResponse | null> {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => response.json());
}
// register
export async function signUp(
  username: string,
  email: string,
  password: string,
): Promise<AuthResponse | null> {
  return fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  }).then((response) => response.json());
}
