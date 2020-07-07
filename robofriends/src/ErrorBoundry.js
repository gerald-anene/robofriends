import React,{Component} from 'react';

class ErrorBoundry extends Component{

 constructor(props){
 	super(props);
 	this.state={
 		hasErrors:false
 	}
 }

 componentDidCatch(){
 	this.setState({hasErrors:true})
 }
	render(){

		if(this.state.hasErrors){
			throw new Error("Nooooo. Something went wrong");
		}

		return this.props.children;
	}
}

export default ErrorBoundry;