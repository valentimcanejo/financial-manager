import { Button } from "../../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Client } from "../../../../models/client";

interface ModalDetalhesPlanoProps {
  dialogTrigger: React.ReactNode;
  dadosCliente: Client;
}

export default function ModalDetalhesPlano({
  dadosCliente,
  dialogTrigger,
}: ModalDetalhesPlanoProps) {
  console.log(dadosCliente);

  return (
    <Dialog>
      <DialogTrigger>{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4 text-xl">
            Detalhes sobre o cliente
          </DialogTitle>
          <div className="flex flex-col gap-4">
            <h2>
              <p className="font-bold">Cliente:</p>
              {dadosCliente?.name?.split(" ")[0] || dadosCliente.email}
            </h2>
            <span>
              <p className="font-bold">Email:</p> {dadosCliente.email}
            </span>
            <span>
              <p className="font-bold">Telefone:</p>
              {dadosCliente.contact || "Não informado"}
            </span>
            <span>
              <p className="font-bold">Plano atual:</p>{" "}
              {dadosCliente.pricingPlan?.name || "Free"}
            </span>
          </div>
          <DialogFooter>
            <Button>Atualizar Plano</Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
