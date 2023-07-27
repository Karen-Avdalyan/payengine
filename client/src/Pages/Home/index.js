import { useEffect, useMemo, useState } from "react"
import { ErrorMessage } from "../../Components/Shared/ErrorMessage"
import { Onboarding } from "../../Components/Onboarding"
import { Loader } from "../../Components/Shared/Loader"
import UsersService from "../../APIServices/user"
import './styles.css'

export const Home = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    const usersService = useMemo(() => new UsersService(), [])

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        const response = await usersService.getCurrentUser()
        if (response.errorMessage) {
            setError(response.errorMessage)
            setLoading(false)
            return
        }

        if (response.data.merchantId) {
            setUser(response.data)
            setLoading(false)
            return
        }

        addMerchantAccount()
    }

    const addMerchantAccount = async () => {
        const response = await usersService.createMerchantAccount()
        if (response.errorMessage) {
            setError(response.errorMessage)
            setLoading(false)
            return
        }

        if (response.data.merchantId) {
            setUser(response.data)
            setLoading(false)
            return
        }
    }

    return (
        <div className="homeContainer">
            {loading ? (
                <Loader />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : (
                <Onboarding merchantId={user.merchantId} merchantIdHmac={user.merchantIdHash} />
            )}
        </div>
    )

}
