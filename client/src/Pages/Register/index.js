import { useCallback, useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth";
import { validateEmail } from "../../Helpers/Validation";
import { AuthFormWrapper } from '../../Components/AuthFormWrapper'
import { ErrorMessage } from "../../Components/Shared/ErrorMessage";
import { Button } from '../../Components/Shared/Button'
import { Input } from '../../Components/Shared/Input'
import AuthService from "../../APIServices/Auth";
import './styles.css'

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const apiService = useMemo(() => new AuthService(), [])

    const { login } = useContext(AuthContext)

    const handleChange = useCallback((event) => {
        const { id, value } = event.target
        const handlers = {
            name: setName,
            email: setEmail,
            password: setPassword,
            confirmPassword: setConfirmPassword
        }

        setErrorMessage('')
        handlers[id](value)
    }, [])

    const validateForm = () => {
        if (!validateEmail(email)) {
            setErrorMessage('Not valid email address')
            return
        }
        if (password !== confirmPassword) {
            setErrorMessage('Confirm password doesn\'t match password')
            return
        }

        return true
    }

    const submit = async () => {
        if (!validateForm()) return

        const response = await apiService.register(name, email, password)
        if (response.errorMessage) {
            setErrorMessage(response.errorMessage)
            return
        }
        if (response.data?.accessToken) {
            login(response.data?.accessToken)
        }
    }

    return (
        <div className="registerWrapper">
            <AuthFormWrapper
                title='Sign Up'
                footer={
                    <div>
                        Already have an account? <Link to='/login' className="loginLink">Login</Link>
                    </div>
                }
            >
                <div className='inputContainer'>
                    <div className="flex">
                        <Input
                            id='name'
                            type='text'
                            label='Name'
                            value={name}
                            onChange={handleChange}
                        />
                        <Input
                            id='email'
                            type='email'
                            label='Email'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <Input
                        id='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={handleChange}
                    />
                    <Input
                        id='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                {errorMessage && <ErrorMessage message={errorMessage} />}
                <Button secondary onClick={submit}>Register</Button>
            </AuthFormWrapper>
        </div>
    )
}
