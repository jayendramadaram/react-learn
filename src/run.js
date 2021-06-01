import React, { Component } from "react";
import './App.css';


class Run extends Component {
    constructor (props) {
        super(props);

        this.state={
            time : null
        }

    }
    time() {
        this.setState({ time : new Date().toLocaleTimeString() });
    }
    render() {
        setInterval(() => { this.time() 
            
        }, 1000);

            if (this.state.time==null) {
                return <div></div>
            }
            else {
                return <p>{ this.state.time }</p>
            }

    }

    
}

export default Run;