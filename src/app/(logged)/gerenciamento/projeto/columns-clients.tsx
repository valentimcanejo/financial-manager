"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../../../components/ui/button";
import { ChartNoAxesGantt } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import useNextHooks from "../../../../hooks/use-next-hooks";
import { useRouter } from "next/navigation";

export type Client = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  situacao: "pending" | "processing" | "success" | "failed";
  contact: string;
};

export const columnsClients: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  // {
  //   accessorKey: "createdAt",
  //   header: "Registrado em",
  // },
  // {
  //   accessorKey: "situacao",
  //   header: "Situação",
  // },
  {
    accessorKey: "contact",
    header: "Contato",
  },
  {
    accessorKey: "detalhes",
    header: "Detalhes",
    cell: function Cell({ row }) {
      const { createQueryString } = useNextHooks();
      const router = useRouter();

      const handleClick = () => {
        const newQuery = createQueryString("id", row.original.id);
        router.push(`gerenciamento/projeto?${newQuery}`);
      };

      return (
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button
                onClick={handleClick}
                className="rounded-full w-8 h-8 bg-background mr-2"
                variant="outline"
                size="icon"
              >
                <ChartNoAxesGantt />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Gerenciar</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
];
