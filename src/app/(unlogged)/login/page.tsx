import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { login, signup } from "./actions";
//import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form className="flex flex-col w-full max-w-md gap-4 mx-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Senha</Label>
          <Input
            // value={senha}
            // onChange={(e) => setSenha(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha..."
          />
        </div>
        <Button formAction={login}>Entrar</Button>
      </form>
    </div>
  );
};

export default Login;
