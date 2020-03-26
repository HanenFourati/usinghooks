import React from 'react'
import Nav from './Nav.js'
class WithoutHooks extends React.Component {
    render (){
        return (
            <div>
                <Nav/>
                <p>without</p>
            </div>
          )
    }

}

export default WithoutHooks
