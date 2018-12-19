import React,{Component} from 'react'
import {Switch,Route,NavLink,Redirect,withRouter, BrowserRouter as Router} from 'react-router-dom' //引入withRouter

function One() {
    return <div>123</div>;
  }
  function NotFound() {
    return <div>Sorry, not found</div>;
  }
class WithRouter2 extends Component{
    //此时才能获取this.props,包含（history, match, location）三个对象
    //输出{match: {…}, location: {…}, history: {…}, 等}
 
    render(){
        console.log(this.props)
        return (<div className='app'>
            <NavLink to='/one/users'>用户列表</NavLink>
            <NavLink to='/one/companies'>公司列表</NavLink>
            <Switch>
                <Route path='/one/:type?' component={One} />
                <Redirect from='/' to='/one' exact />
                <Route component={NotFound} />
            </Switch>
        </div>)
    }
}
export default class WithRouterExample2 extends React.Component{
    render(){
        return(
            <Router>
                <WithRouter2/>
            </Router>
        )
    }
}
