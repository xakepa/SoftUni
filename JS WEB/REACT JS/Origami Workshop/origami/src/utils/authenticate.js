const authenticate = async (url, body, onSucces, onFail) => {


    try {
        const data = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = data.headers.get('Authorization')
        document.cookie = `jwt-token=${authToken}`

        const response = await data.json()

        if (response.username && authToken) {
            onSucces({
                username: response.username,
                id: response._id
            })
        } else {
            onFail()
        }

    } catch (error) {
        console.error(error)
    }
}

export default authenticate