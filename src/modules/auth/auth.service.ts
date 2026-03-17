// src/modules/auth/auth.service.ts
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";
import { JwtHelper } from "../../helpers/jwt.helper";

interface LoginPayload {
  email: string;
  password: string;
}

export const AuthService = {
  loginUser: async (payload: LoginPayload) => {
    const { email, password } = payload;

    // 1️⃣ Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        buyerProfile: true,
        sellerProfile: true,
      },
    });

    if (!user) throw new Error("User not found");

    // 2️⃣ Check password
    if (!user.password) throw new Error("This account uses social login");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid password");

    // 3️⃣ Sign JWT
    const token = JwtHelper.signToken({ userId: user.id, role: user.role });

    // 4️⃣ Remove password before returning
    const { password: _, ...safeUser } = user;

    return { accessToken: token, user: safeUser };
  },
};
