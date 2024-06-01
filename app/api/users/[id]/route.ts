import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET a single user by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  });
  return user ? NextResponse.json(user) : NextResponse.json({ error: 'User not found' });
}

// PUT (update) a user by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json();
  const updatedUser = await prisma.user.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(updatedUser);
}

// DELETE a user by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await prisma.user.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'User deleted' });
}
