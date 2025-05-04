import { useEffect, useState } from 'react';

export function useSetup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [isEmailValid, setIsEmailValid] = useState(false);
	const [isTouched, setIsTouched] = useState(false);

	useEffect(() => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isValid = emailRegex.test(email);
		setIsEmailValid(isValid);

		if (isTouched) {
			if (email === '') {
				setEmailError('');
			} else if (!isValid) {
				setEmailError('Por favor, insira um email válido');
			} else {
				setEmailError('');
			}
		}
	}, [email, isTouched]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (!isTouched && e.target.value !== '') {
          setIsTouched(true);
        }
      };

	return {
		email,
		password,
		showPassword,
		emailError,
		isEmailValid,
		isTouched,
		setEmail,
		setPassword,
		setShowPassword,
		setEmailError,
		setIsEmailValid,
		setIsTouched,
        handleEmailChange,
        togglePasswordVisibility
	};
}
