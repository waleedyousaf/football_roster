export const setUserInLocalStorage = (userInfo) => {
    localStorage.setItem('user', JSON.stringify(userInfo));
}

export const getUserFromLocalStorage = () => {
    if (checkUserInLocalStorage())
    {
        return JSON.parse(localStorage.getItem('user'))
    }
}

export const checkUserInLocalStorage = () => {
    if (JSON.parse(localStorage.hasOwnProperty('user'))){
        return true
    }
}

export const removeUserFromLocalStorage = () => {
    return localStorage.removeItem('user')
}