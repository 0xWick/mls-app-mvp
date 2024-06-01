import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all users
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST a new user
export async function POST(request: Request) {
  const data = await request.json();
  const newUser = await prisma.user.create({
    data,
  });
  return NextResponse.json(newUser);
}
