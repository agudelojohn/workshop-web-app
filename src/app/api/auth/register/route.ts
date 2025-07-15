import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
// import prisma from "@/lib/db";

export async function POST(request: Request) {
  console.log("DEBUGGER POST");
  try {
    const { email, password } = await request.json();
    if (!Boolean(email) || !Boolean(password)) {
      return NextResponse.json(
        { message: "Email and password required." },
        { status: 400 }
      );
    }
    console.log("DEBUGGER env", process.env.DATABASE_URL);
    const existingUser = await prisma.usersAuth.findUnique({
      where: { email },
    });

    if (Boolean(existingUser)) {
      return NextResponse.json(
        { message: "Email exists already, choose another one." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.usersAuth.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User created succesfully",
        user: { id: newUser.id, email: newUser.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during register:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  console.log("DEBUGGER: GET");
  try {
    const userList = await prisma.usersAuth.findMany();
    const dataFiltered = userList?.map(userData=>{
      return {
        email: userData.email,
        createdAt: userData.createdAt
      }
    })
    return NextResponse.json({ data: dataFiltered }, { status: 200 });
  } catch (error) {
    console.error("Error during list:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
