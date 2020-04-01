import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class AddTodo extends Component {
	state = {
		modal: false,
		name: ''
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			name: this.state.name
		};
		// Add item via addItem action

		this.props.addItem(newItem);

		// Close modal
		this.toggle();
	};
	render() {
		return (
			<div>
				<div
					className="rounded-md shadow mx-auto text-center w-1/3 sm:w-1/4"
					onClick={this.toggle}
				>
					<p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
						Todo Ekle
					</p>
				</div>
				{this.state.modal ? (
					<div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
						<div>
							<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
						</div>
						<div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
							<form onSubmit={this.onSubmit}>
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
											<i className="far fa-clipboard text-gray-800 fa-lg"></i>
										</div>
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<h3 className="text-lg leading-6 font-medium text-gray-900">
												Todo ekle
											</h3>
											<div className="mt-4">
												<p className="text-sm leading-5 text-gray-700">
													<input
														className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
														type="text"
														name="name"
														id="item"
														placeholder="Odayı toparla"
														onChange={this.onChange}
													/>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
									<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
										<button
											type="submit"
											className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
										>
											Ekle
										</button>
									</span>
									<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
										<button
											onClick={this.toggle}
											type="button"
											className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
										>
											İptal
										</button>
									</span>
								</div>
							</form>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { addItem })(AddTodo);
