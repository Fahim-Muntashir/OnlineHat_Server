// modules/user/user.service.ts
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
  role: "BUYER" | "SELLER";
};

const createUser = async (payload: CreateUserPayload) => {
  const { name, email, password, role } = payload;

  // 🔴 Check existing user
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 🔐 Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 🟢 Create user + profile
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,

      buyerProfile:
        role === "BUYER"
          ? {
              create: {},
            }
          : undefined,

      sellerProfile:
        role === "SELLER"
          ? {
              create: {},
            }
          : undefined,
    },
    include: {
      buyerProfile: true,
      sellerProfile: true,
    },
  });

  // ❌ Remove password before returning
  const { password: _, ...safeUser } = user;

  return safeUser;
};

export const UserService = {
  createUser,
};
