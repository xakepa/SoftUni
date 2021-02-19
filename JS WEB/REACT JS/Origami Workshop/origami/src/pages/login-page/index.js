import React from 'react'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import UserContext from '../../Context'
import authenticate from '../../utils/authenticate'
import styles from './index.module.css'

class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
        rePassword: ''
    }

    static contextType = UserContext

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        await authenticate('http://localhost:9999/api/user/login', {
            username, password
        }, (user) => {

            this.context.logIn(user)
            this.props.history.push('/')
        }, (e) => {
            console.log('Error', e)
        })
    }

    render() {
        const { username, password } = this.state

        return (
            <PageWrapper>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title='Login' />

                    <Input
                        value={username}
                        onChange={(e) => { this.onChange(e, 'username') }}
                        label='Username'
                        id='username'
                    />
                    <Input
                        type='password'
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                    />
                    <SubmitButton title='Login' />
                </form>
            </PageWrapper>
        )
    }

}

export default LoginPage