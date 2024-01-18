

export const getToken = () => {

    const user = JSON.parse(localStorage.getItem('authUser'))
    if(user) {
        
        return user['access-token']

    }
}