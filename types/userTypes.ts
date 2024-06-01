// Enum
// ? User Type
// ? Client or Realtor
export enum UserType {
    Client = "Client",
    Realtor = "Realtor",
  }
  
  // User Type
  // ? Client or Realtor
  export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    type: UserType;
    createdAt: Date;
  };
  