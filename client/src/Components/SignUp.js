import React from 'react'
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
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
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div>
				<header className='signup-container'>
					<div className='container'>
						<div className='col-md-8 mx-auto'>
							<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
								<h1 className="signup-intro">Sign Up:</h1>
								<input className="form-elements" type="text" placeholder="Name" name="name" defaultValue={name} />
								<input className="form-elements" type="text" placeholder="Email" name="email" defaultValue={email} />
								<input className="form-elements" type="password" placeholder="Password" name="password" defaultValue={password} />
								<button className="form-elements signup-submit">Sign Up</button>
							</form>
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default SignUp