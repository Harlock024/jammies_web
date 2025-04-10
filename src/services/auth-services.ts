import { AuthResponse } from "@/types/auth-response";

import { API_URL } from "./api_url";
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
