import React from 'react'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'

class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
        rePassword: ''
    }

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        try {
            const data = await fetch('http://localhost:9999/api/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const authToken = data.headers.get('Authorization')
            document.cookie = `jwt-token=${authToken}`

            const response = await data.json()

            if (response.username && authToken) {
                this.props.history.push('/')
            }

        } catch (error) {
            console.error(error)
        }

    }

    render() {
        const { username, password } = this.state

        return (
            <PageWrapper>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title='Login' />

                    <Input
                        value={username}
                        onChange={(e) => { this.handleChange(e, 'username') }}
                        label='Username'
                        id='username'
                    />
                    <Input
                        type='password'
                        value={password}
                        onChange={(e) => this.handleChange(e, 'password')}
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