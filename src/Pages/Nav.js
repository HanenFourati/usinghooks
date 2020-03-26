import React from 'react'
import {Link} from 'react-router-dom'

function Nav () {
             return (
             <div>
                 <Link to="/"> Home </Link>
                 <Link to="/with"> With Hooks </Link>
                 <Link to='/without'> Without Hooks </Link>
             </div>
             )
}
export default Nav