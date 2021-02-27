import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';
import { createUser } from '../../utils/API';

// function SignIn(props) {
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        }
    }


    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: "Yoda2",
                email: "yoda2@yahoo.com",
                password: "1234"
             })
        };
        fetch('http://localhost:3002/api/users')
            .then(res => res.json())
            .then(data => this.setState({ posts: data}) )
    }

    render() {


    const [projects] = useState([
        {
        background : "Sky2.jpg"
        }
      ])
    const [formState, setFormState] = useState({ email: '', password: ''})
    return (
        <div>
        <img src= {process.env.PUBLIC_URL+"/"+projects[0].background} alt="Card image" className = "image"/>
        <div>Sign In Testing</div>
        </div>
    )  
}
}
// }

export default SignUp;


