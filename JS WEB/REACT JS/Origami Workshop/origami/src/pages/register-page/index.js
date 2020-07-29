import React from 'react'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'

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
        const { username, password, rePassword } = this.state

        await authenticate('http://localhost:9999/api/user/register', {
            username, password, rePassword
        }, () => {
            this.props.history.push('/')
        }, (e) => {
            console.log('Error', e)
        })
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