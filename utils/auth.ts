import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { serialize } from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret_if_not_set";
if (JWT_SECRET === "your_default_secret_if_not_set") {
  console.error(
    "JWT_SECRET is not set in env variables correctly. Using default value. Not safe."
  );
}

const SECRET_KEY = new TextEncoder().encode(JWT_SECRET);

export async function signJwt(payload: JWTPayload, expiresIn: string = "1h") {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn)
    .sign(SECRET_KEY);
}

export async function verifyJwt(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return null;
  }
}

export function clearAuthCookie() {
  return serialize("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });
}
