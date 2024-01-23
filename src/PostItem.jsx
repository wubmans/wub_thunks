import { useNavigate } from "react-router-dom"

export default ({ post }) => 
{
    const navigate = useNavigate()

    return (
    <div className="post_item">
        <span>ID: </span><span><a href="#" onClick= { () => { navigate("/posts/" + post.id) }} >{ post.id }</a></span> | <span>Author_ID: </span><span>{ post.author_id }</span><br/>
        <span>created: { post.createdAt.substring(0, 10) }</span><br/>
        <span>Title: </span><span><strong>{ post.title }</strong></span><br/><br/>
        <p> { post.content } </p>
        <pre> { JSON.stringify(post) }</pre>
    </div>)
}