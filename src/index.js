import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './App';
import Toggle from './Toggle'


ReactDOM.render(
	<React.Fragment>
		<Toggle />
	  	<Todolist />
  	</React.Fragment>,
  document.getElementById('root')
);
