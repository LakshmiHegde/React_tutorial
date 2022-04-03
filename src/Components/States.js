import React, {Component} from "react";

class States extends Component{
    constructor() {
        super()
        this.state = {
            name: 'welcom'
        }
    }

    changeName(){
        this.setState({
            name:'Bhumika'
        })
    }
    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={() => this.changeName()}> Change </button>
            </div>
        );
    }
}

export default States