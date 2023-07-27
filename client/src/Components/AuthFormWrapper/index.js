import './styles.css'

export const AuthFormWrapper = ({ title, children, footer }) => {
    return (
        <div className='formWrapper'>
            <div className='title'>{title}</div>
            {children}
            <div className='footer'>{footer}</div>
        </div>
    )
}
