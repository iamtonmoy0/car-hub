"use client";
import React, { useState } from "react";
import SearchMenufactorer from "./SearchMenufactorer";

export default function SearchBar() {
  const [menufactorer, setMenufactorer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="" onSubmit={handleSearch}>
      <div>
        <SearchMenufactorer
          menufactorer={menufactorer}
          setMenufactorer={setMenufactorer}
        />
      </div>
    </form>
  );
}
