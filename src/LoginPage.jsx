import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginThunk } from "./Store"
import { Navigate } from "react-router-dom"

export default ()  => {

    const user = useSelector(state => state.auth.user)
  
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    const dispatch = useDispatch()

    function onSubmit() {
        
        if (email == "")
        {
            return
        }

        if (password == "")
        {
            return
        }


        dispatch(loginThunk(email, password))
    }

    if (user)
    {
        return (<Navigate  to="/" />)
    }

    return (
        <div className="page">
            <h2>Login page</h2>
          
            <span className="labeltje">email</span><input type="text" value= { email } onChange={ (e) => { setEmail(e.target.value)}}/><br/>
            <span className="labeltje">password</span><input type="password" value= { password } onChange={ (e) => { setPassword(e.target.value)}}/><br/>
            <br />
            <button type="submit" onClick = { onSubmit }>Login</button>
        </div>
    )

}
