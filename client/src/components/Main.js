import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Public from './Public';
import Protected from './Protected';

class Main extends Component {
	static propTypes = {
		auth: PropTypes.object.isRequired
	};
	render() {
		const { isAuthenticated } = this.props.auth;

		return <> {isAuthenticated ? <Protected /> : <Public />}</>;
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, null)(Main);
