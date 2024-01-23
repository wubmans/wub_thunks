import { Navigate, useNavigate, useParams } from "react-router-dom";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./Store";
import { useEffect } from "react";

export default function()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()

    const post = useSelector(state => state.posts.find(p => p.id == id ))

    const isLoading = useSelector(state => state.isLoading)

    useEffect(() => { dispatch(fetchPost(id)) }, [dispatch, id])

    let post_content = ""

    if (post) {
        post_content =  <>
        <div className="post_page">
        <h2>{ post && post.title }</h2>

        <pre>
            <span>ID: </span><span><a href="#" onClick= { () => { navigate("/posts/" + post.id) }} >{ post.id }</a></span> | <span>Author_ID: </span><span>{ post.author_id }</span><br/>
            <span>created: { post.createdAt.substring(0, 10) }</span><br/>
        </pre>
        <p> { post.content } </p>

        <pre> { JSON.stringify(post) }</pre>
    
        </div>
        </>
    }
    return (
        <>
            <p>
            <button type="button" onClick={ () => { navigate("/") }}>go back</button>
            </p>
            
            <div>
                { isLoading ? '⌛' : ''}
            </div>

           { post_content }
        </>
    )
}