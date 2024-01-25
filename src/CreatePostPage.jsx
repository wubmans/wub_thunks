import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "./Store";

export default () => 
{

    const [text, setText] = useState("");
    const [input, setInput] = useState("");
    const dispatch = useDispatch();



    function onSubmit(event)
    {
        event.preventDefault();

        if (text === "")
        {
            // show error : "hey, please enter text"
            return
        }

        dispatch(createPost(input, text))
    }


    function onChange(event)
    {
        setText(event.target.value);
    }

    return (
        <div>

            <form onSubmit={ onSubmit }>
                <input name="" id="" cols="30" rows="10" onChange = { (e) => { setInput(e.target.value)} } placeholder="post title"/><br/>
                <textarea name="" id="" cols="30" rows="10" onChange = { (e) => {setText(e.target.value )} }></textarea>
                <br/><br/>
                <button type="submit">Post </button>
            </form>

        </div>
    )
}