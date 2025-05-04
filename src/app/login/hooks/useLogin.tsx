import { useAuth } from "@/contexts/AuthContext";

type UseLoginProps = {email: string, password: string, isEmailValid: boolean, setEmailError: (value: string) => void, setIsTouched: (isTouched: boolean) => void}


export function useLogin({email,password, isEmailValid, setEmailError, setIsTouched} : UseLoginProps) {
  const {login} = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTouched(true);
    
    if (!isEmailValid) {
      setEmailError('Por favor, insira um email válido');
      return;
    }
    
    login(email, password);
  };



  return {
    handleSubmit
  }
}