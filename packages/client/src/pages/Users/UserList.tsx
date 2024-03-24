import React from "react";
import "./Users.css";

import { useTheme } from "@/components/theme-provider";

interface UserListProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  result: React.ReactNode;
}

const UserList: React.FC<UserListProps> = ({
  handleInputChange,
  query,
  result
}) => {
  const { theme } = useTheme();
  return (
    <>
      <section className="search">
        <input
          className={`search-input ${theme}`}
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search by Id or Name"
        />
      </section>
      <section className="card-container">{result}</section>
    </>
  );
};

export default UserList;
