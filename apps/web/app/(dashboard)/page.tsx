"use client";

import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Page() {
  const query = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p>apps/web</p>
        <Button onClick={() => addUser()}>Add</Button>
        <OrganizationSwitcher hidePersonal />
        <div className="max-w-sm w-full mx-auto">
          <UserButton />
          {JSON.stringify(query, null, 2)}
        </div>
      </div>
    </>
  );
}
