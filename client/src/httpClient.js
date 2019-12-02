import axios from 'axios'
import jwtDecode from 'jwt-decode'

// Instantiate axios
// For Heroku:
// const httpClient = axios.create()
// For Local:
const httpClient = axios.create({baseURL:"http://localhost:3001"})

httpClient.getToken = function() {
    return localStorage.getItem('token')
    // Local storage only has a few built-in functions - can be used to store a JWT
}

httpClient.setToken = function(token) {
    localStorage.setItem('token', token)
    return token
}

httpClient.getCurrentUser = function() {
    const token = this.getToken()
    if (token) return jwtDecode(token)
    return null
}

httpClient.logIn = function(credentials) {
    return this({ method: 'post', url: '/api/users/authenticate', data: credentials })
        .then((serverResponse) => {
            const token = serverResponse.data.token
            if (token) {
                // REMEMBER THIS
                // Sets token as an included header for all subsequent api requests
                this.defaults.headers.common.token = this.setToken(token)
                return jwtDecode(token)
            } else {
                return false
            }
        })
}

// SignUp function - if someone attempts to signup a second time, will return false
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: '/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				console.log(`signup`)
				console.log(this.defaults)
				this.defaults.headers.common.token = this.setToken(token)
				console.log(this.defaults)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.logOut = function() {
    localStorage.removeItem('token')
    delete this.defaults.headers.common.token
    return true
}

// During initial app load: attempt to set a localStorage stored token as a default header for all api requests
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient