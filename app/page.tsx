import { PrismaClient } from '@prisma/client';
import AddUser from '@/components/shared/AddUser';

import AddListing from '@/components/shared/AddListing';
import User from '@/components/shared/User';
import Listing from '@/components/shared/Listing';

import { User as UserType } from "../types/userTypes";
import { Listing as ListingType } from "../types/listingTypes";

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
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">MLS for Realtors</span>
      <h1 className=" text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-700 ml-2">Server Actions</span>
      </h1>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddUser />
        <AddListing />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          <h2 className="text-2xl font-bold">Users</h2>
          {users.map((user : UserType) => (
            <div className="w-full" key={user.id}>
              <User user={user} />
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-10">Listings</h2>
          {listings.map((listing: ListingType) => (
            <div className="w-full" key={listing.id}>
              <Listing listing={listing} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
