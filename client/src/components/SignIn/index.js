import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';
import { createUser } from '../../utils/API';


function SignIn(props) {
    
// function MyControlledInput({}) {
//     const [value, setValue] = useState('');

//     const onChange = (event) => {
//         setValue(event.target.value);
//     }
//     // return (
//     //     <>
//     //     <div>Input value: {value} </div>
//     //      <input value={value} onChange={onChange} placeholder="Username" type="text" name="username"/><br />
         
//     //     </>
//     // )
// }

// // export default class SignIn extends React.Component {


//     // componentDidMount() {
//     //     console.log("email is :", this.email.value)
//     // }
//     // constructor(props) {
//     //     super(props);

//     //     this.handleSubmit  = this.handleSubmit.bind(this)
//     //     }
//     // }


//    const  handleSubmit = async(event) => {
//         event.preventDefault();
//         fetch('http://localhost:3002/api/users', {
//             method: 'POST',
//             // headers: { 'Content-Type': 'application/json' },
//             body: {
//                 "username": this.username.value,
//                 "email": this.email.value,
//                 "password": this.password.value
                
//              }
//         })
//     }
//         // check if form has everything (as per react-bootstrap docs)
//         // const form = event.currentTarget;
//         // if (form.checkValidity() === false) {
//         //   event.preventDefault();
//         //   event.stopPropagation();
//         // }
    
//         // try {

//     // componentDidMount() {
//     //     const requestOptions = {
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         body: JSON.stringify({ 
//     //             username: ${userFormData.username},
//     //             email: "yoda@yahoo.com",
//     //             password: "1234"
//     //          })
//     //     };
//     //     fetch('http://localhost:3002/api/users')
//     //         .then(res => res.json())
//     //         .then(data => this.setState({ posts: data}) )
//     // }

    

//     render() {
    
  
//     // const [projects] = useState([
//     //     {
//     //     background : "Sky2.jpg"
//     //     }
//     //   ])
//     // const [formState, setFormState] = useState({ email: '', password: ''})
//     return (
//         <div id= "signup">
//             <form  onSubmit={handleSubmit}>
                
//                 <input ref={(ref) => {this.email = ref}} placeholder="Email" type="text" name="email"/><br />
//                 <input ref={(ref) => {this.password = ref}} placeholder="Password" type="text" name="password"/><br />
//                 <input ref={(ref) => {this.username = ref}} placeholder="Username" type="text" name="username"/><br />
//                <button type="Submit">Start</button>
//             </form>
//             {/* <div>Input value: {value} </div> */}
         
//             {/* <Form onSubmit = {handleFormSubmit}>
//             <Form.Group>
//                 <Form.Label htmlFo='email'>Email</Form.Label>
//             </Form.Group>
//             </Form> */}
//         {/* <img src= {process.env.PUBLIC_URL+"/"+projects[0].background} alt="Card image" className = "image"/> */}
//         <div>Sign In Testing</div>
//         </div>
//     )  
// }
}


export default SignIn;