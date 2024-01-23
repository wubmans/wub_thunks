import { useDispatch, useSelector } from "react-redux"
import { store, fetchPosts } from "./Store"
import PostItem from "./PostItem"
import React from "react"
import { connect } from 'react-redux';


 class HomePage extends React.Component

{

    state = store.getState()

    componentDidMount() {
        store.subscribe(() => {
            const currentState = store.getState()
            if (this.state !== currentState) {
                this.setState(currentState);
            }    
        });
    }

    render() {

        const { dispatch } = this.props;               

        let list = []

        const { isLoading, posts } = this.state;

        if (posts && posts.length !== 0)
        {
            posts.forEach((post, i) => 
            {
                list.push(<PostItem key = { i } post = { post } />)
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
}

export default connect()(HomePage)