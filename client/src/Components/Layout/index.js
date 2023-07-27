import { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth'
import { Button } from '../Shared/Button'
import './styles.css'

export const Layout = ({ children }) => {
    const { isLoggedIn, logout } = useContext(AuthContext)

    return (
        <div className='layout'>
            <div className="header">
                <img src="https://uploads-ssl.webflow.com/6073106caa48850be3b17375/6074a9de9fe144031dec7614_logo.svg" alt='logo' />
                {isLoggedIn && <Button onClick={logout}>Logout</Button>}
            </div>
            {children}
        </div>
    )
}
