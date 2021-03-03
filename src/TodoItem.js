import React, { Component } from 'react';

class TodoItem extends Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	render(){
		return <li>
			<div>{this.props.contain}<button onClick={this.handleClick}>{'delete'}</button></div>
		</li>
	}
	handleClick(){
		console.log(this.props.idx)
		this.props.deleMethod(this.props.idx)
	}
}

export default TodoItem;