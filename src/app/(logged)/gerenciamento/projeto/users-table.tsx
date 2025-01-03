"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../../../../components/ui/data-table";
import { columnsClients } from "./columns-clients";

const UsersTable = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:3002/api/backend/users/allUsers").then((res) =>
        res.json()
      ),
  });

  return <DataTable columns={columnsClients} data={data || []} />;
};

export default UsersTable;
