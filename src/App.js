import React , {Component} from 'react'
import TodoItem from './TodoItem';
import store from './store'

class TodoList extends Component{
	constructor(props) {
		super(props);
		this.state = store.getState();
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);

		store.subscribe(this.handleStoreChange);
	}
	render(){
		return(
			<div>
				<div>
					<input 
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleButtonClick}>send</button>
				</div>
				<ul>
					{this.getItem()}
				</ul>
			</div>
		)
	}

	getItem(){
		return(
			this.state.list.map((item, index) =>{
				return <TodoItem 
					contain = {item}
					idx = {index}
					deleMethod = {this.handleItemDelete}
				/>
			})
		)
	}

	handleInputChange(e){
		const value = e.target.value;
		const action = {
			type: 'change_input_value',
			value: value
		}
		store.dispatch(action);
	}

	handleButtonClick(e){
		const action = {
			type: 'store_input_value',
			value: this.state.inputValue
		}
		store.dispatch(action);
		this.setState(store.getState())
	}

	handleItemDelete(index){
		console.log(index);
		const list = [...this.state.list];
		list.splice(index, 1);
		console.log(list);
		this.setState({
			list: list
		})
	}

	handleStoreChange(){
		this.setState(store.getState())
	}
}

export default TodoList;
