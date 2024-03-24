import { SetStateAction, useState } from "react";

import UserList from "./UserList";
import Card from "./components/Card";
import "./Users.css";

import users from "./exampledata";

function UserManager() {
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  const filteredItems = users.filter(
    (user) => user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(
    users: { name: string; nickname: string }[],
    query: string
  ) {
    let filteredusers = users;

    // Filtering Input Items
    if (query) {
      filteredusers = filteredItems;
    }

    return filteredusers.map(({ name, nickname }) => (
      <Card key={Math.random()} name={name} nickname={nickname} />
    ));
  }

  const result = filteredData(users, query);

  return (
    <>
      <div className="user-manager">
        <UserList
          result={result}
          query={query}
          handleInputChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default UserManager;
