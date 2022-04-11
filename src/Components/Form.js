import React, {Component} from "react";

class Form extends Component{
    constructor() {
        super();
        this.state = {
            username:'',
            password:'',
            type:''
        }
    }
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    changeType = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    submitresponse = (event) =>{
        alert('login page created successfully')
        event.preventDefault()
    }
    render(){
        return(<form onSubmit={this.submitresponse}>
            <label>Username: </label>
            <input type='text' value={this.state.username} onChange={this.changeUsername}/>

            <label>Password: </label>
            <input type='password' value={this.state.password} onChange={this.changePassword}/>

            <label>Type: </label>
            <select value={this.state.type} onChange={this.changeType}>
                <option value='Cust'>Customer</option>
                <option value='part'>Partner</option>
                <option value='Del'>Delivery</option>
            </select>
            <input type='submit' value='Submit' onChange={this.submitresponse}/>
        </form>)
    }

}

export default Form