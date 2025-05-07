import { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState("Sneha");
  const [age, setAge] = useState(21);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {loggedIn ? "Logged In" : "Logged Out"}</p>

      <button onClick={() => setName("Sindhu")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default UserProfile;
