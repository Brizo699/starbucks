import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Homepage() {
  const { data: session, status } = useSession();

  // This is only going to work if the user isnt logged in
  if (!session)
    return (
      <div>
        <span className="mr-2">You need to log back in to the APP</span>
        <Link href="/signin">Log In</Link>
      </div>
    );

  return (
    <div>
      <h1>YOU ARE LOGGED IN TO STARBUCKS</h1>
    </div>
  );
}

export default Homepage;
