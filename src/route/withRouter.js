//http://www.mamicode.com/info-detail-2423098.html
import React from 'react'

import PropTypes from 'prop-types'

import { withRouter,BrowserRouter as Router } from 'react-router-dom'// A simple component that shows the pathname of the current location

class ShowTheLocation extends React.Component { 

static propTypes = { 

   match: PropTypes.object.isRequired, 

   location: PropTypes.object.isRequired, 

   history: PropTypes.object.isRequired
 }

  render() {

    const { match, location, history } = this.props

   return (
     <div>You are now at {location.pathname}</div>
   )
 }
}
const ShowRouter= withRouter(ShowTheLocation)
// Create a new component that is "connected" (to borrow redux// terminology) to the router.
export default class WithRouterExample extends React.Component{
    render(){
        return(
            <Router>
                <ShowRouter/>
            </Router>
        )
    }
}

