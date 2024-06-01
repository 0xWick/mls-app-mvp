import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET a single listing by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const listing = await prisma.listing.findUnique({
    where: { id: params.id },
  });
  return listing ? NextResponse.json(listing) : NextResponse.json({ error: 'Listing not found' });
}

// PUT (update) a listing by ID
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const data = await request.json();
  const updatedListing = await prisma.listing.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(updatedListing);
}

// DELETE a listing by ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await prisma.listing.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'Listing deleted' });
}
