import React from 'react'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'

class RegisterPage extends React.Component {

    state = {
        username: '',
        password: '',
        rePassword: ''
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        try {
            const data = await fetch('http://localhost:9999/api/user/register', {
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

        const { username, password, rePassword } = this.state

        return (
            <PageWrapper>
                <form onSubmit={this.handleSubmit}>
                    <Title title='Register' />
                    <div className={styles.container}>
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
                        <Input
                            type='password'
                            value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword')}
                            label="Re-Password"
                            id="re-password"
                        />
                    </div>
                    <SubmitButton title='Register' />
                </form>
            </PageWrapper>
        )
    }

}

export default RegisterPage