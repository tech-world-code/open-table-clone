import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Link href="/" className="logo">
          OpenTable
        </Link>
      </div>
      <button>Signin</button>
      <button>Signup</button>
    </nav>
  );
}
