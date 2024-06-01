import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all listings
export async function GET() {
  const listings = await prisma.listing.findMany();
  return NextResponse.json(listings);
}

// POST a new listing
export async function POST(request: Request) {
  const data = await request.json();
  const newListing = await prisma.listing.create({
    data,
  });
  return NextResponse.json(newListing);
}
