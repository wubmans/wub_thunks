import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "./Store"

export default () => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    function onClick() 
    {
        dispatch(logout())
    }

    return (

        <div>
            { user ? <><span>Hi, {user.name }</span> | <a href="#" onClick={ onClick } >logout</a></>: <Link to = "/login">Login</Link>}
        </div>

    )
}