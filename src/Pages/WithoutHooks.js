import React from 'react'
import Nav from './Nav.js'
class WithoutHooks extends React.Component {
    constructor (props) {
        super(props)
        this.state= {count: 0}
    }
    componentDidMount (){
        document.title="Clicked "+this.state.count+"times"
    }
    componentDidUpdate (){
        document.title="Clicked "+this.state.count+"times"
    }
    render (){
        return (
            <div>
                <Nav/>
                <p>without</p>
                <button onClick={ () => this.setState({ count: this.state.count+1})}>{this.state.count}</button>
            </div>
          )
    }

}

export default WithoutHooks
