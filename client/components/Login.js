import React, {Component} from 'react';
import '../css/App.css';
import axios from 'axios';
import { Card, CardBody, CardHeader, CardFooter, Button, Form, FormInput, FormGroup } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn:'', firstName:'', lastName:'', username: '', password: ''}

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleLoginClick = this.handleLoginClick.bind(this);

    }

    // handleLoginClick() {
    //     axios.
    //
    // }



    handleInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }



    render(){



        return (
            <div className = "login-container">
                <Card theme="light">
                    <CardHeader>Livestocks</CardHeader>
                    { console.log("STATE", this.state) }
                    <CardBody>
                        <div className="login-input-container">
                            <div className="group">
                                <input name="username" type="text" onChange={this.handleInputChange} required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Username</label>
                            </div>
                            <div className="group">
                                <input name="password" type="password" onChange={this.handleInputChange} required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Password</label>
                            </div>
                        </div>



                        <div className="login-login-container">
                            <Button

                                outline
                                size="lg">
                                Login
                            </Button>
                        </div>
                        <div className="login-register-container">
                            <Button
                                size="lg">
                                Register
                            </Button>
                        </div>


                    </CardBody>
                    <CardFooter>Forgot password?</CardFooter>
                </Card>
            </div>

            // <div className="login-container">
            //     <div className="login-form-container">
            //
            //
            //     </div>
            //     <div className="login-buttons-container">
            //         <div className="login-login-container">
            //
            //         </div>
            //         <div className="login-register-container">
            //
            //         </div>
            //     </div>
            // </div>
        );
    }

}

export default Login;