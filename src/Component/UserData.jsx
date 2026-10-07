import React from "react";
import useFetchData from "./useFetchData";

export default function UserData() {
  const {
    data: users,
    loading,
    error
  } = useFetchData("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (error) {
    return <h2 className="message">Error: {error}</h2>;
  }

  return (
    <div className="user-container">
      <h1>User Details</h1>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>
              <strong>ID:</strong> {user.id}
            </p>

            <p>
              <strong>Username:</strong> {user.username}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>Website:</strong> {user.website}
            </p>

            <p>
              <strong>City:</strong> {user.address.city}
            </p>
            <p><strong>Street:</strong> {user.address.street}</p>
            
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}