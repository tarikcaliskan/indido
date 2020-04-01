import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Redirect } from 'react-router-dom';

class RegisterForm extends Component {
	state = {
		alert: false,
		name: '',
		email: '',
		password: '',
		msg: null
	};
	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		register: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired
	};

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;
		if (error !== prevProps.error) {
			// Check for register error
			if (error.id === 'REGISTER_FAIL') {
				this.setState({ msg: error.msg.msg });
			} else {
				this.setState({ msg: null });
			}
		}

		// If authenticated, close alert
		if (this.state.alert) {
			if (isAuthenticated) {
				this.clearErr();
			}
		}
	}

	clearErr = () => {
		// Clear errors
		this.props.clearErrors();
		this.setState({
			alert: !this.state.alert
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();

		const { name, email, password } = this.state;

		// Create user object
		const newUser = {
			name,
			email,
			password
		};

		// Attempt to register
		this.props.register(newUser);
	};
	render() {
		const { isAuthenticated } = this.props;
		if (isAuthenticated) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<div className="min-h-full my-48 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full">
						<div>
							<svg
								className="fill-current mx-auto h-12 w-auto text-indigo-600 hover:text-pink-500 transition duration-150 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
							</svg>
							<h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
								Kayıt oluşturun
							</h2>
							{this.state.msg ? (
								<div
									className="p-2 mt-4 bg-indigo-600 items-center text-indigo-100 leading-none rounded-lg flex"
									role="alert"
								>
									<span className="flex rounded-full bg-pink-500 uppercase px-2 py-1 text-xs font-bold mr-3">
										HATA
									</span>
									<span className="font-semibold mr-2 text-left">
										<p>{this.state.msg}</p>
									</span>
									<svg
										className="fill-current opacity-75 h-4 w-4 ml-auto"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										onClick={this.clearErr}
									>
										<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
									</svg>
								</div>
							) : null}
						</div>
						<form className="mt-8" action="#" onSubmit={this.onSubmit}>
							<input type="hidden" name="remember" value="true" />
							<div className="rounded-md shadow-sm">
								<div>
									<label
										htmlFor="name"
										className="text-sm font-semibold text-gray-900"
									>
										İsim Soyisim
									</label>

									<input
										aria-label="İsim Soyisim"
										name="name"
										type="text"
										required
										className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
										placeholder="İsim soyisim"
										onChange={this.onChange}
									/>
								</div>
								<div className="mt-4">
									<label
										htmlFor="email"
										className="text-sm font-semibold text-gray-900"
									>
										Email
									</label>
									<input
										aria-label="Email address"
										name="email"
										type="email"
										required
										className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
										placeholder="Email"
										onChange={this.onChange}
									/>
								</div>
								<div className="mt-4">
									<label
										htmlFor="password"
										className="text-sm font-semibold text-gray-900"
									>
										Şifre
									</label>
									<input
										aria-label="Password"
										name="password"
										type="password"
										required
										className="appearance-none rounded-none relative block w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
										placeholder="Şifre"
										onChange={this.onChange}
									/>
								</div>
							</div>

							<div className="mt-6">
								<button
									type="submit"
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
								>
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400
											transition ease-in-out duration-150"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												className="heroicon-ui"
												d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
											/>
										</svg>
									</span>
									Kayıt Ol
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(
	RegisterForm
);
