import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Redirect } from 'react-router-dom';
class LoginForm extends Component {
	state = {
		alert: false,
		email: '',
		password: '',
		msg: null
	};
	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		login: PropTypes.func.isRequired,
		clearErrors: PropTypes.func.isRequired
	};

	componentDidUpdate(prevProps) {
		const { error, isAuthenticated } = this.props;
		if (error !== prevProps.error) {
			// Check for register error
			if (error.id === 'LOGIN_FAIL') {
				this.setState({ msg: error.msg.msg });
			} else {
				this.setState({ msg: null });
			}
		}

		// If authenticated, close alert
		if (this.state.alert) {
			if (isAuthenticated) {
				this.toggle();
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

		const { email, password } = this.state;

		const user = {
			email,
			password
		};
		// Attempt to login
		this.props.login(user);
	};
	render() {
		const { isAuthenticated } = this.props;
		if (isAuthenticated) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<div
					className="min-h-full my-48 flex items-center justify-center bg-gray-50 py-12
				px-4 sm:px-6 lg:px-8"
				>
					<div className="max-w-md w-full">
						<div>
							<svg
								className="fill-current mx-auto h-12 w-auto text-indigo-600 hover:text-pink-500 transition duration-150 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
							</svg>
							<h2
								className="mt-6 text-center text-3xl leading-9 font-extrabold
							text-gray-900"
							>
								Hesabına giriş yap
							</h2>
							{this.state.msg ? (
								<div
									className="p-2 mt-4 bg-indigo-600 items-center text-indigo-100 leading-none rounded-lg flex"
									role="alert"
								>
									<span className="flex rounded-full bg-pink-500 uppercase px-2 py-1 text-xs font-bold mr-3">
										HATA
									</span>
									<span className="font-semibold mr-2">
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
						<form
							className="mt-8"
							action="#"
							method="POST"
							onSubmit={this.onSubmit}
						>
							<input type="hidden" name="remember" value="true" />
							<div className="rounded-md shadow-sm">
								<div>
									<input
										aria-label="Email address"
										name="email"
										type="email"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2
									border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
									focus:outline-none focus:shadow-outline-blue focus:border-blue-300
									focus:z-10 sm:text-sm sm:leading-5"
										placeholder="Email"
										onChange={this.onChange}
									/>
								</div>
								<div className="-mt-px">
									<input
										aria-label="Şifre"
										name="password"
										type="password"
										required
										className="appearance-none rounded-none relative block w-full px-3 py-2
									border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md
									focus:outline-none focus:shadow-outline-blue focus:border-blue-300
									focus:z-10 sm:text-sm sm:leading-5"
										placeholder="Password"
										onChange={this.onChange}
									/>
								</div>
							</div>

							<div className="mt-6">
								<button
									type="submit"
									className="group relative w-full flex justify-center
								py-2 px-4 border border-transparent text-sm leading-5 font-medium
								rounded-md text-white bg-indigo-600 hover:bg-indigo-500
								focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo
								active:bg-indigo-700 transition duration-150 ease-in-out"
								>
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<svg
											className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400
										transition ease-in-out duration-150"
											fill="currentColor"
											viewBox="0 0
										20 20"
										>
											<path
												fillRule="evenodd"
												d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0
											01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
									Giriş Yap
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

export default connect(mapStateToProps, { login, clearErrors })(LoginForm);
