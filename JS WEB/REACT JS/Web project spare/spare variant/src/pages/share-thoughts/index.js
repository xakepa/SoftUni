import React from 'react'
import SubmitButton from '../../components/button/submit-button';
import Origamies from '../../components/origamies';
import PageWrapper from '../../components/page-wrapper';
import Title from '../../components/title';
import styles from './index.module.css'

const ShareThoughtsPage = () => {
    return (
        <PageWrapper>
            <Title title='Share your thoughts...' />
            <textarea className={styles.textarea} defaultValue=''></textarea>
            <SubmitButton title='POST' />
            <Origamies length={3} />
        </PageWrapper>
    )
}

export default ShareThoughtsPage