"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../../components/ui/button";
import { ChartNoAxesGantt } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

export type Projeto = {
  id: string;
  nome: string;
  situacao: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Projeto>[] = [
  {
    accessorKey: "nome",
    header: "Status",
  },
  {
    accessorKey: "situacao",
    header: "Situação",
  },
  {
    accessorKey: "detalhes",
    header: "Detalhes",
    cell: ({ row }) => (
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button
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
    ),
  },
];
