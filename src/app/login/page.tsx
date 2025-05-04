'use client';
import { FiEye, FiEyeOff, FiMail, FiLock, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useSetup } from './hooks/useSetup';
import { useLogin } from './hooks/useLogin';

export default function LoginPage() {
 const {email, emailError, isEmailValid, isTouched, password, setIsTouched, setPassword, setEmailError, showPassword, togglePasswordVisibility, handleEmailChange} = useSetup()
const {handleSubmit} = useLogin({email, password, isEmailValid, setEmailError, setIsTouched})



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-800 mb-2">Bem-vindo</h1>
          <p className="text-gray-500">Faça login para continuar</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className={`flex items-center border rounded-lg px-4 py-3 ${emailError ? 'border-red-500' : isEmailValid ? 'border-green-500' : 'border-gray-200'}`}>
              <FiMail className={`mr-3 ${emailError ? 'text-red-500' : isEmailValid ? 'text-green-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Email"
                className="w-full outline-none text-gray-700"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => setIsTouched(true)}
              />
              {isTouched && (
                <>
                  {isEmailValid && <FiCheckCircle className="text-green-500 ml-2" />}
                  {emailError && <FiXCircle className="text-red-500 ml-2" />}
                </>
              )}
            </div>
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          
          <div className="flex items-center border rounded-lg px-4 py-3 border-gray-200">
            <FiLock className="text-gray-400 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="w-full outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          
          <button
            type="submit"
            className={`w-full py-3 rounded-lg transition duration-200 font-medium ${
              isEmailValid && password.length > 0
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!isEmailValid || password.length === 0}
          >
            Entrar
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Não tem uma conta? <a href="#" className="text-gray-700 hover:underline">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
}