// app/components/shared/User.tsx

// Import Type User

import { User as UserType } from "../../types/userTypes";

// Also Set User type in User.tsx

const User = ({ user }: { user: UserType }) => {
    return (
      <div className="border p-4 rounded shadow">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Type:</strong> {user.type}</p>
        <p><strong>Created At:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    );
  };
  
  export default User;
  