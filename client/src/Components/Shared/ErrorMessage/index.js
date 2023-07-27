import './styles.css'

export const ErrorMessage = ({ message, className }) => {
    return (
        <div className={className ? `message ${className}` : 'message'}>{message}</div>
    )
}
