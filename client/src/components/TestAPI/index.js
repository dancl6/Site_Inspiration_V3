import React, { Component, useState } from 'react';
import Auth from '../../utils/auth';
import { ErrorHandler } from 'universal-react-logger'
import { render } from 'react-dom';
// const { signToken } = require('../../../../server/utils/');
// class TestAPI extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             posts: []
//         }
//     }



const TestAPI = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [errorState, setErrorState] = useState({errorState: null})


    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
          error: event.error,
          errorInfo: event.errorInfo
        });
      };

      const handleFormSubmit = async event => {
        // setTimeout(function(){
        event.preventDefault();

        // use try/catch instead of promises to handle errors
        try {
        
        console.log("form state is:", formState.username)
        //   const { data } = await addUser({
        //     variables: { ...formState }
        //   });
        
        //   Auth.login(data.addUser.token);

        fetch('http://localhost:3002/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formState.username,
                email: formState.email,
                password: formState.password,
            })
        }).then(response => {
          return response.json
        })
        .then(userArray => { 
     
          fetch(`http://localhost:3002/api/users/${userArray.id}/token`).then(response => {
            return response.json()
          })
          .then(id_token => {
     
            let token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7fSwiaWF0IjoxNjExMTE1NzcwLCJleHAiOjE2MTExMjI5NzB9.RehTv9QfkHOBiPQdsYfB-84zJJrag3S0QNA77MiQN0c"
            // Auth.login("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7fSwiaWF0IjoxNjExMTE1NzcwLCJleHAiOjE2MTExMjI5NzB9.RehTv9QfkHOBiPQdsYfB-84zJJrag3S0QNA77MiQN0c")
            Auth.login(id_token)
          })})


        } catch (e) {

          console.error(e);
          e.setEventError(e)
          setErrorState(e)
  
        }
        console.log("Hello")

      };


      

      // render()
      //  {
        // if(errorState === null) {

        return(
        <div>
            <form onSubmit = {handleFormSubmit} >
                <input
                    placeholder= 'Your username'
                    name='username'
                    type='username'
                    value={formState.username}
                    onChange={handleChange}
                /> Username
                <input
                    placeholder= 'Your email'
                    name='email'
                    type='email'
                    value={formState.email}
                    onChange={handleChange}
                /> Email
                <input
                    placeholder= 'Your password'
                    name='password'
                    type='password'
                    value={formState.password}
                    onChange={handleChange}
                />Password
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {/* {this.state.posts.map(post => <div className = "test-color" key={post.email}>{post.email}</div>)} */}
        </div>
        )
        // )} 
        // return ( 
        //   <div>
        //  <div>${errorState}</div>
        //  </div>
        //  ) 
// )
// }


}



export default TestAPI;