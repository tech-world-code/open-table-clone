"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <>
      <input
        placeholder="State, city, or town"
        className="standard-input"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input>
      <button
        className="standard-btn"
        onClick={() => {
          if (location === "hi") return;
          router.push("/Search");
        }}
      >
        Let's go!
      </button>
    </>
  );
}
