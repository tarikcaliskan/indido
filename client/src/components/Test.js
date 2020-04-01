import React from 'react';
import styles, { css } from 'styled-components';

export default class Test extends React.Component {
	state = { count: 0 };

	increment = () => this.setState({ count: this.state.count + 1 });
	decrement = () => this.setState({ count: this.state.count - 1 });

	render() {
		return (
			<div className={styles.counter}>
				<button className={styles.button} onClick={this.increment}></button>
			</div>
		);
	}
}
