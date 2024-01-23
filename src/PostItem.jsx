export default function PostItem({ item })
{
    return (
    <div className="post_item">
        <span>ID: </span><span><a href={ "/posts/" + item.id }>{ item.id }</a></span> | <span>Author_ID: </span><span>{ item.author_id }</span><br/>
        <span>created: { item.createdAt.substring(0, 10) }</span><br/>
        <span>Title: </span><span><strong>{ item.title }</strong></span><br/><br/>
        <p> { item.content } </p>
        <pre> { JSON.stringify(item) }</pre>
    </div>)
}