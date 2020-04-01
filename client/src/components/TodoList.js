import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, toggleItem } from '../actions/itemActions';
import propTypes from 'prop-types';

class TodoList extends Component {
	componentDidMount() {
		this.props.getItems();
	}
	onToggleClick = (id) => {
		this.props.toggleItem(id);
	};
	onDeleteClick = (id) => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<div className="mt-24">
				<TransitionGroup className="todo-list">
					{items.map(({ _id, name, isCompleted }) => (
						<CSSTransition key={_id} timeout={500} classNames="fade">
							<div className="flex mt-2 bg-gray-200 mx-4 sm:mx-auto sm:w-2/3 md:1/3 items-center rounded-md">
								<div className="flex-grow-0 text-gray-200 rounded-sm text-center bg-indigo-600 hover:bg-indigo-500 px-4 py-2 m-2">
									<button
										className="focus:outline-none font-semibold"
										onClick={this.onDeleteClick.bind(this, _id)}
									>
										X
									</button>
								</div>
								<div className="flex-grow text-gray-800 rounded-sm border-gray-800 text-left border-1 px-4 py-2 m-2">
									<p className={isCompleted ? 'line-through' : 'no-underline'}>
										{name}
									</p>
								</div>
								<div className="flex-grow-0 text-yellow-600 hover:text-yellow-500 font-semibold rounded-sm text-center px-4 py-2 m-2">
									<button
										className="focus:outline-none"
										onClick={this.onToggleClick.bind(this, _id)}
									>
										<i className="fas fa-star "></i>
									</button>
								</div>
							</div>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		);
	}
}

TodoList.propTypes = {
	getItems: propTypes.func.isRequired,
	item: propTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem, toggleItem })(
	TodoList
);
