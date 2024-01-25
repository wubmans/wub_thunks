import { useState } from "react"
import { useDispatch } from "react-redux"
import { signup } from "./Store"

export default ()  => {

    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    const [ repeatPassword, setRepeatPassword] = useState("")
    const [ email, setEmail] = useState("")

    const dispatch = useDispatch()

    function onSubmit() {
        
        if (username == "")
        {
            return
        }

        if (password == "")
        {
            return
        }

        if (password !== repeatPassword)
        {
            return
        }

        if (email == "")
        {
            return
        }

        dispatch(signup(username, email, password))
    }

    return (
        <div className="page">
            <h2>Signup page</h2>
          
            <span className="labeltje">username</span><input type="text" value= { username } onChange={ (e) => { setUsername(e.target.value)}}/><br/>
            <span className="labeltje">email</span><input type="text" value= { email } onChange={ (e) => { setEmail(e.target.value)}}/><br/>
            <span className="labeltje">password</span><input type="password" value= { password } onChange={ (e) => { setPassword(e.target.value)}}/><br/>
            <span className="labeltje">retype password</span><input type="password" value= { repeatPassword } onChange={ (e) => { setRepeatPassword(e.target.value)}}/><br/>
            { (password !== "" && repeatPassword !== "" && password !== repeatPassword) ? <span className="error">passwords don't match</span> : ''}
            <br />
            <button type="submit" onClick = { onSubmit }>Sign up</button>
        </div>
    )

}
