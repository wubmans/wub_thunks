import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./Store"
import PostItem from "./PostItem"
import { useEffect } from "react"

export default function HomePage()

{

    const dispatch = useDispatch()

    const posts = useSelector(state => state.feed.posts)
    const isLoading = useSelector(state => state.feed.isLoading)
    let list = []

    if (posts && posts.length !== 0)
    {
        posts.forEach((post, i) => 
        {
            list.push(<PostItem key = { i } post = { post } />)
        })
    }

    useEffect(() => { dispatch(fetchPosts) }, [ dispatch])

    return (
        <div>
            <h2>Lol homepage</h2>
            <button className="primary" disabled = { isLoading } onClick = { () => { dispatch(fetchPosts)}}>Fetch posts</button> { isLoading ? '⌛' : '' }
            <pre> { list } </pre>
        </div>
    )
}