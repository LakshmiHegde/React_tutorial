import React, {Component} from "react";

class Props_example extends Component{
    render() {
        return( <div>
             <h1>Hello {this.props.name}</h1>
                <h2>Age is {this.props.age}</h2>
                {this.props.children}
        </div>
        )
    }
}

export  default Props_example