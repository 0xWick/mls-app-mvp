// app/components/shared/Listing.tsx

import { Listing as ListingType } from "../../types/listingTypes";

const Listing = ({ listing } : {listing : ListingType}) => {
    return (
      <div className="border p-4 rounded shadow">
        <p><strong>Title:</strong> {listing.title}</p>
        <p><strong>Description:</strong> {listing.description}</p>
        <p><strong>Price:</strong> ${listing.price}</p>
        <p><strong>Status:</strong> {listing.status}</p>
        <p><strong>Created At:</strong> {new Date(listing.createdAt).toLocaleDateString()}</p>
      </div>
    );
  };
  
  export default Listing;
  