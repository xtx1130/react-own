import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Test from '_/components/TestCase'

class App extends Component {
	constructor() {
		super();
		this.state={
			appVal:'null'
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.setState({appVal:'changed'})
	}
	componentWillReceiveProps(){

	}
	render(){
		return(
			<div>
				<button onClick={this.handleClick}>click to get new props</button>
				<Test {...this.props} val={this.state.appVal}/>//这个this.props没必要传，因为这已经是props的根了
			</div>
		)
	}
}

// App.defaultProps = {
// 	val:''
// }
export default App