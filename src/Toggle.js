import React ,{Component} from 'react'

class Toggle extends Component{
	constructor(props) {
	    super(props);
	    this.state = {isToggleOn: true};
	    this.handleClick = this.handleClick.bind(this);
	  }
	handleClick() {
	    this.setState(prevState => {
	      this.state.isToggleOn =!prevState.isToggleOn;
	      console.log(this.state.isToggleOn);
	      return this.state;
	    });
	  }  
	render() {
		return (
			<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'} </button>
		);
	}
}

export default Toggle;