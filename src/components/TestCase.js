import React, {Component} from 'react'

class Test extends Component{
	constructor(props) {
		super(props);
		this.state = {
			val:'null'
		}
	}
	componentWillMount() {
		this.setState({val:'componentWillMount only run once'})
	}
	componentDidMount() {
		this.setState({val:'componentDidMount has run'})
	}
	componentWillReceiveProps(newProps) {
		newProps.val != this.state.val && this.setState({val:'componentWillReceiveProps has run'})
	}
	shouldComponentUpdate(newProps) {
		console.log(newProps.val ,this.props.val)
		return true		
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('will up to props:',nextProps.val)
		console.log('will up to stats:',nextState.val)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate will up to props:',prevProps.val)
		console.log('componentDidUpdate will up to stats:',prevState.val)
	}
	componentWillUnmount() {
		console.log('unmount')
	}
	render(){
		//const {val} = this.state
		const {val} = this.props
		return (
			<div>
				<input type="text" value={val} style={{width:'300px'}}/>
				<div>this state:{this.state.val}</div>
			</div>
			)
	}
}
export default Test