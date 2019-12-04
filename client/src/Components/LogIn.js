import React from 'react'
import httpClient from '../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div>
				<header className="login-container">
					<div className='container'>
						<div className='col-md-8 mx-auto'>
							<form className="login-form" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
								<h1 className="login-intro">Log In:</h1>
								<input className="form-elements" type="text" placeholder="Email" name="email" defaultValue={email} />
								<input className="form-elements" type="password" placeholder="Password" name="password" defaultValue={password} />
								<button className="form-elements login-submit">Log In</button>
							</form>
						</div>
					</div>
				</header>

			</div>

		)
	}
}

export default LogIn