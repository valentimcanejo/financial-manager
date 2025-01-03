import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../../../components/ui/button";
import { BlocksIcon, ChartNoAxesGantt, CircleX } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";
import useNextHooks from "../../../../hooks/use-next-hooks";
import { useRouter } from "next/navigation";
import ModalDetalhesPlano from "./modal-detalhes-plano";
import { Client } from "../../../../models/client";

export const columnsClients: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contact",
    header: "Contato",
  },
  {
    accessorKey: "pricingPlan",
    header: "Plano",
    cell: function Cell({ row }) {
      return !row.original?.pricingPlan?.name ||
        row.original?.pricingPlan?.name === "free" ? (
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <CircleX className="text-red-400" />
            </TooltipTrigger>
            <TooltipContent side="bottom">Sem Plano</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div className="flex items-center gap-2">
          <span className="font-medium text-green-400">
            {row.original?.pricingPlan?.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "detalhes",
    header: "Detalhes",
    cell: function Cell({ row }) {
      // const { createQueryString } = useNextHooks();
      // const router = useRouter();

      // const handleClick = () => {
      //   const newQuery = createQueryString("id", row.original.id);
      //   router.push(`gerenciamento/projeto?${newQuery}`);
      // };

      return (
        <ModalDetalhesPlano
          dadosCliente={row.original}
          dialogTrigger={
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <ChartNoAxesGantt />
                </TooltipTrigger>
                <TooltipContent side="bottom">Gerenciar</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          }
        />
      );
    },
  },
];
