import { useState, useCallback, useContext } from "react";
import { AuthContext } from "../context/auth-context";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const { userData, isLogged, deslogar } = useContext(AuthContext);

  const handleLogin = useCallback(async (email: string, senha: string) => {
    setLoading(true);
    setError(null);

    // try {
    //   const checkoutUrl = await LoginUseCase.execute(email, senha);

    //   return checkoutUrl;
    // } catch (error) {
    //   if (error instanceof FirebaseError) {
    //     console.error("Erro original:", error.originalError);
    //     setError(error.message);
    //   } else {
    //     console.error("Erro desconhecido:", error);
    //     setError("Erro desconhecido ao buscar usuário.");
    //   }
    // } finally {
    //   setLoading(false);
    // }
  }, []);

  return {
    handleLogin,
    loading,
    user,
    error,
    userData,
    isLogged,
    deslogar,
  };
};
