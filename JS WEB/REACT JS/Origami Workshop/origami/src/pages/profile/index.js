import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import Origamies from '../../components/origamies'
import UserContext from '../../Context'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null
        }
    }

    static contextType = UserContext

    componentDidMount() {
        this.getUser(this.props.match.params.userid)
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!response.ok) {
            this.props.history.push('/error')
        }

        const user = await response.json()
        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    }

    logOut = () => {
        this.context.logOut()
        this.props.history.push('/')
    }

    render() {
        const { username, posts } = this.state

        return (
            <PageWrapper>
                <div>
                    <p>User: {username}</p>
                    <p>Posts: {posts}</p>
                    <button onClick={this.logOut}>Logout</button>
                </div>
                <Origamies length={3} />
            </PageWrapper>
        )
    }
}

export default Profile