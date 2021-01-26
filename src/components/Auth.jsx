import { useSelector } from 'react-redux'
import { login } from '../actions/authActions'
import { useDispatch } from 'react-redux'


const Auth = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const handleLogin = () => {
        dispatch(login())
    }

    return (
        <div>
            <button
                onClick={handleLogin}
                className="btn btn-info">{isLoggedIn ? 'Log out' : 'Log in'}</button>
        </div>
    )
}

export default Auth
