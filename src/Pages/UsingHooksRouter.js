import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import WithHooks from './WithHooks.js'
import WithoutHooks from './WithoutHooks.js'
const CallHome = () => (
    <Home />
    )
const CallWithHooks= () => (
    <WithHooks />
    )
const CallWithoutHooks = () => (
    <WithoutHooks />
    )
class UsingHooksRouter extends React.Component{
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={CallHome} />
                    <Route exact path="/with" component={CallWithHooks}/>
                    <Route exact path="/without" component={CallWithoutHooks}/>
                </Switch>
            </div>
        )
    }

}
export default UsingHooksRouter