import { PrismaClient } from '@prisma/client';
import AddUser from '@/components/shared/AddUser';

import AddListing from '@/components/shared/AddListing';
import User from '@/components/shared/User';
import Listing from '@/components/shared/Listing';

import { User as UserType } from "../types/userTypes";
import { Listing as ListingType } from "../types/listingTypes";
import { InputForm } from '@/components/Dashboard/LoginForm';

const prisma = new PrismaClient();

// Fetch users and listings from the database
async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      type: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return users;
}

async function getListings() {
  const listings = await prisma.listing.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      status: true,
      userId: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return listings;
}

const Home = async () => {
  const users = await getUsers();
  const listings = await getListings();

  return (
   <div>
    <InputForm>
    </InputForm>
   </div>
  );
};

export default Home;
