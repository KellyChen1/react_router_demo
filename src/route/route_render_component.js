import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

class Bar extends React.Component {

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        const {idx} = this.props;
        return (
            <div>in Bar : {idx}</div>
        )
    }
}

export default class RenderVsComponent extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {idx: 1}
    }

    handleClick = () => {
        this.setState(state => ({idx: state.idx + 1}))
    };

    render() {
        return (
            <div>
                <div>
                    {this.state.idx}
                    <button onClick={this.handleClick}>add</button>
                </div>
                <div>
                    <BrowserRouter>
                        <Route component={() => (<Bar idx={this.state.idx}/>)}/>
                        {/* <Route render={() => (<Bar idx={this.state.idx}/>)}/> */}

                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

