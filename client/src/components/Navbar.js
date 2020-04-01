import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	state = {
		isOpen: true,
		isOpenUser: false
	};

	static propTypes = {
		auth: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	toggleUser = () => {
		this.setState({
			isOpenUser: !this.state.isOpenUser
		});
	};

	redirectUser = () => {
		this.setState({
			isOpenUser: !this.state.isOpenUser
		});
		this.props.logout();
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<>
				<i
					className="fas fa-user fa-lg ml-8 text-indigo-600 hover:text-pink-500"
					onClick={this.toggleUser}
				></i>
				{this.state.isOpenUser ? (
					<div
						className="absolute w-48 top-0 right-0 mt-8 p-2 transition transform
					origin-top-right"
					>
						<div className="rounded-lg shadow-md">
							<div className="rounded-lg bg-white shadow-sm overflow-hidden">
								<div>
									<i
										className="fas fa-times fa-sm p-2 float-right focus:outline-none
									focus:bg-gray-100
									focus:text-indigo-700 transition duration-150
									ease-in-out"
										onClick={this.toggleUser}
									></i>
								</div>
								<div>
									{user ? (
										<p className="mt-8 ml-2 text-sm font-medium text-gray-900 text-left">{`Hoş geldin, ${user.name}`}</p>
									) : null}{' '}
								</div>
								<div
									className="flex ml-2 text-gray-700 hover:bg-indigo-100
								hover:text-gray-900 mt-4 mb-4 py-1 pr-1 mr-1 focus:outline-none
								focus:bg-gray-100
								focus:text-indigo-700
								rounded-md transition duration-150 ease-in-out"
									onClick={this.redirectUser}
								>
									<div>
										<i className="fas fa-running fa-lg ml-2 mt-2 mr-2"></i>
									</div>
									<div>
										<a
											href="#0"
											className="text-xs font-semibold text-center focus:outline-none
										focus:bg-gray-100
										focus:text-indigo-700"
										>
											OTURUMU KAPAT
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : null}
			</>
		);
		const authLinksMobile = (
			<a
				href="#0"
				className="block py-3 text-xs font-semibold bg-indigo-100 font-semibold
				text-sm text-indigo-600 bg-gray-50 hover:bg-gray-100
				hover:text-pink-500 focus:outline-none focus:bg-gray-100
				focus:text-indigo-700 transition duration-150 ease-in-out"
			>
				<i
					className="fas
					fa-running fa-lg ml-4"
					onClick={this.props.logout}
				></i>
				&nbsp; OTURUMU KAPAT
			</a>
		);
		const guestLinks = (
			<>
				<Link
					className="ml-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-3 md:text-sm md:font-semibold md:px-5"
					to="/login"
				>
					GİRİŞ
				</Link>
				<Link
					className="ml-8  px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-3 md:text-sm md:font-semibold md:px-5"
					to="/register"
				>
					KAYIT OL
				</Link>
			</>
		);
		const guestLinksMobile = (
			<>
				<Link
					className="mt-1 block px-3 py-2 mb-1 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-indigo-100 focus:outline-none focus:text-gray-900 focus:bg-indigo-100 transition duration-150 ease-in-out"
					to="/login"
				>
					GİRİŞ
				</Link>

				<Link
					className="block w-full px-5 py-3 text-center bg-indigo-100 font-semibold text-sm text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-800 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
					to="/register"
				>
					KAYIT OL
				</Link>
			</>
		);

		return (
			<div>
				<div className="pt-6 px-4 sm:px-6 lg:px-8">
					<nav className="relative flex items-center justify-between sm:h-10">
						<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<Link to="/">
									<div className="flex items-center">
										<img
											className="h-8 w-auto sm:h-10"
											src="logo.svg"
											alt="Logo"
										/>
										<p className="ml-2 text-gray-800 antialiased font-bold tracking-normal text-2xl">
											indido
										</p>
									</div>
								</Link>
								<div
									onClick={this.toggle}
									className="-mr-2 flex items-center md:hidden"
								>
									<button
										type="button"
										className="inline-flex items-center 
										justify-center p-2 rounded-md 
										text-gray-900 hover:text-indigo-700
										focus:outline-none
										transition duration-150 ease-in-out"
									>
										<svg
											className="h-6 w-6"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden md:block md:ml-10 md:pr-4">
							<a
								href="http://github.com/tarikcaliskan"
								className="font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
							>
								Github
							</a>
							<a
								href="https://www.linkedin.com/in/tar%C4%B1k-%C3%A7ali%C5%9Fkan-3b42741a4/"
								className="ml-8 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
							>
								LinkedIn
							</a>
							{isAuthenticated ? authLinks : guestLinks}
						</div>
					</nav>
				</div>
				<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div
						className={
							this.state.isOpen
								? 'rounded-lg shadow-md hidden'
								: 'rounded-lg shadow-md block'
						}
					>
						<div className="rounded-lg bg-white shadow-sm overflow-hidden">
							<div className="px-5 pt-4 flex items-center justify-between">
								<div>
									<img className="h-8 w-auto" src="logo.svg" alt="" />
								</div>
								<div className="-mr-2">
									<button
										type="button"
										className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
										onClick={this.toggle}
									>
										<svg
											className="h-6 w-6"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div className="px-2 pt-2 pb-3">
								<a
									href="http://github.com/tarikcaliskan"
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-indigo-100 focus:outline-none focus:text-gray-900 focus:bg-indigo-100 transition duration-150 ease-in-out"
								>
									Github
								</a>
								<a
									href="https://www.linkedin.com/in/tar%C4%B1k-%C3%A7ali%C5%9Fkan-3b42741a4/"
									className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-indigo-100 focus:outline-none focus:text-gray-900 focus:bg-indigo-100 transition duration-150 ease-in-out"
								>
									LinkedIn
								</a>
								{isAuthenticated ? authLinksMobile : guestLinksMobile}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
