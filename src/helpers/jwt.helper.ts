// src/helpers/jwt.helper.ts
import jwt, { Secret, SignOptions, JwtPayload } from "jsonwebtoken";
import ms from "ms";

const getJwtSecret = (): Secret => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET not defined in .env");
  return secret;
};

// Convert JWT_EXPIRES_IN string to seconds
const jwtExpiresIn: SignOptions["expiresIn"] = process.env.JWT_EXPIRES_IN
  ? ms(process.env.JWT_EXPIRES_IN as ms.StringValue) / 1000 // force TypeScript to accept string
  : 7 * 24 * 60 * 60; // default 7 days in seconds

export type JwtPayloadData = {
  userId: string;
  role: "BUYER" | "SELLER" | "ADMIN";
};

export const JwtHelper = {
  signToken: (payload: JwtPayloadData) => {
    return jwt.sign(payload, getJwtSecret(), { expiresIn: jwtExpiresIn });
  },

  verifyToken: (token: string) => {
    try {
      return jwt.verify(token, getJwtSecret()) as JwtPayloadData;
    } catch (error: any) {
      if (error.name === "TokenExpiredError")
        throw new Error("Token has expired");
      throw new Error("Invalid token");
    }
  },

  decodeToken: (token: string) => {
    const decoded = jwt.decode(token) as JwtPayload | null;
    if (!decoded) return null;

    const { userId, role } = decoded as any;
    if (!userId || !role) return null;

    return { userId, role } as JwtPayloadData;
  },
};
