const defaultState = {
	inputValue : 'sleep',
	list : ['s','l','e','e','p']

}

export default (state = defaultState, action)=>{
	console.log(state,action);
	if (action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === 'store_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = [...newState.list, action.value];
		return newState;
	}
	return state;
}