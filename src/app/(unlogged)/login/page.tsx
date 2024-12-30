"use client";

import { FormEvent, useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { signIn, useSession } from "next-auth/react";
//import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const { data, status } = useSession();

  //const { handleLogin } = useAuth();

  const handleLoginUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("google");

      if (result?.error) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
    //router.push("/");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {/* <form
        onSubmit={handleLoginUser}
        className="flex flex-col w-full max-w-md gap-4 mx-4"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //type="email"
            id="email"
            placeholder="Digite seu email..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Senha</Label>
          <Input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            id="password"
            placeholder="Digite sua senha..."
          />
        </div>
        <Button type="submit">Entrar</Button>
      </form> */}
      <Button type="button" onClick={handleLoginUser}>
        Entrar com Google
      </Button>
    </div>
  );
};

export default Login;
