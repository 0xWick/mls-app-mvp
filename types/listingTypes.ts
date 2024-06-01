  // Listing Status Enum
  export enum ListingStatus {
    Active = "Active",
    Inactive = "Inactive",
  }

  // Listing Type
  // ? Listing Type
  export type Listing = {
    id: string;
    title: string;
    description: string;
    price: number;

    // Enum Status
    status: ListingStatus;

    // Realtor ID
    userId: string;
    createdAt: Date;
  };