import SearchBar from "@/app/Components/SearchBar";
import React from "react";

export default function Header() {
  return (
    <div className="hero" style={{ height: "20vh" }}>
      <SearchBar></SearchBar>
    </div>
  );
}
