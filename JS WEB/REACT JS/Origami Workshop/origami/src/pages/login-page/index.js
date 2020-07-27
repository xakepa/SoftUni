import React from 'react'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'

class LoginPage extends React.Component {

    state = {
        email: '',
        password: '',
        rePassword: ''
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }
    render() {
        const { email, password } = this.state

        return (
            <PageWrapper>
                <form className={styles.container}>
                    <Title title='Login' />

                    <Input
                        value={email}
                        onChange={(e) => { this.onChange(e, 'email') }}
                        label='Email'
                        id='email'
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