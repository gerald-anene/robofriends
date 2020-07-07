import React,{Component} from 'react';
import Cards from './Cards';
import ErrorBoundry from './ErrorBoundry';
import 'tachyons';
import SearchBox  from './SearchBox'

class App extends Component{

constructor(){
	super();
	this.state={
		robots:[],
		searchfield:''
	}
}

componentDidMount(){
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(result=>result.json())
	.then(users=>this.setState({robots:users}))
}

onRobotSearch=(event)=>{
	this.setState({searchfield:event.target.value})
}
  render(){
  	const filteredRobots=this.state.robots
  	    .filter(robot=>robot.name.toLowerCase()
  		.includes(this.state.searchfield.toLowerCase()))
    return (
           <div className="tc">
           <h1>Robofriends</h1>
           <SearchBox searchRobots={this.onRobotSearch} />
           <ErrorBoundry>
           <Cards robots={filteredRobots} />
           </ErrorBoundry>
           </div>
    	   )
  }
}

export default App;