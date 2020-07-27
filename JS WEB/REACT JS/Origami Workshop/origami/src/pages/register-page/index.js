import React from 'react'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'

class RegisterPage extends React.Component {

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

        const { email, password, rePassword } = this.state

        return (
            <PageWrapper>
                <div>
                    <Title title='Register' />
                    <div className={styles.container}>
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
                        <Input
                            type='password'
                            value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword')}
                            label="Re-Password"
                            id="re-password"
                        />
                    </div>
                    <SubmitButton title='Register' />
                </div>
            </PageWrapper>
        )
    }

}

export default RegisterPage