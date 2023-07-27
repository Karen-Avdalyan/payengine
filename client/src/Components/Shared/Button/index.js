import './styles.css'

export const Button = ({ className, secondary, ...rest }) => {
    let buttonClassName = 'button'
    if (secondary) buttonClassName += ' secondary'
    if (className) buttonClassName += ` ${className}`

    return (
        <button className={buttonClassName} {...rest} />
    )
}
