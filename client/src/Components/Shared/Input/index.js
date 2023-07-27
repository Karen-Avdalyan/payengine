import './styles.css'

export const Input = ({ className, label, ...rest }) => {
    return (
        <div className='inputWrapper'>
            {label && <label htmlFor={rest.id} className='label'>{label}</label>}
            <input className={className ? `input ${className}` : 'input'} {...rest} />
        </div>
    )
}
