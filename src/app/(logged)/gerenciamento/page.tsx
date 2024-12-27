import { ContentLayout } from "../../../components/admin-panel/content-layout";
import { Projeto, columns } from "./columns";
import { DataTable } from "../../../components/ui/data-table";

async function getData(): Promise<Projeto[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nome: "AvaliarMe",
      situacao: "pending",
    },
  ];
}

export default async function Gerenciamento() {
  const data = await getData();

  return (
    <ContentLayout title="Gerenciamento">
      <DataTable columns={columns} data={data} />
    </ContentLayout>
  );
}
