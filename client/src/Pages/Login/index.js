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

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const apiService = useMemo(() => new AuthService(), [])

    const { login } = useContext(AuthContext)

    const handleChange = useCallback((event) => {
        const { id, value } = event.target
        const handlers = {
            email: setEmail,
            password: setPassword
        }

        setErrorMessage('')
        handlers[id](value)
    }, [])

    const validateForm = () => {
        if (!validateEmail(email)) {
            setErrorMessage('Not valid email address')
            return
        }

        return true
    }

    const submit = async () => {
        if (!validateForm()) return

        const response = await apiService.login(email, password)
        if (response.errorMessage) {
            setErrorMessage(response.errorMessage)
            return
        }
        if (response.data?.accessToken) {
            login(response.data?.accessToken)
        }
    }

    return (
        <div className="loginWrapper">
            <AuthFormWrapper
                title='Sign In'
                footer={
                    <div>
                        Don't have an account? <Link to='/register' className="signupLink">Signup</Link>
                    </div>
                }
            >
                <div className='inputContainer'>
                    <Input
                        id='email'
                        type='email'
                        label='Email'
                        value={email}
                        onChange={handleChange}
                    />
                    <Input
                        id='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                {errorMessage && <ErrorMessage message={errorMessage} />}
                <Button secondary onClick={submit}>Login</Button>
            </AuthFormWrapper>
        </div>
    )
}
