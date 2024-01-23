import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./Store"
import PostItem from "./PostItem"
import { useEffect } from "react"

export default function HomePage()

{

    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts)
    const isLoading = useSelector(state => state.isLoading)
    let list = []

    if (posts.length !== 0)
    {
        posts.forEach((post, i) => 
        {
            list.push(<PostItem key = { i } item = { post } />)
        })
    }

    // useEffect(() => { dispatch(fetchPosts) }, [ dispatch])

    return (
        <div>
            <h2>Lol homepage</h2>
            <button className="primary" disabled = { isLoading } onClick = { () => { dispatch(fetchPosts)}}>Fetch posts</button> { isLoading ? '⌛' : '' }
            <pre> { list } </pre>
        </div>
    )
}