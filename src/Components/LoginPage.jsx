import React,{useState} from "react";
import styled from "@emotion/styled";
import { logInCredentials } from "../data/constants";
import { switchAuthentication } from "../redux/action";
import { useDispatch } from "react-redux";
import logoImage from "../Assets/app-logo.png"


const storedUserName=localStorage.getItem('username') || ""
const storedPassword= localStorage.getItem('password') || ""

const LoginPage=()=>{
    const dispatch=useDispatch()
    const [enteredCredentials, setEnteredCredentials]=useState({username:storedUserName, password:storedPassword})
    const [revealPassword, setRevealPassword]=useState(false)

    const handleInputChange=(e)=>{
        const {id,value} = e.target
        if(id==="username"){
            setEnteredCredentials({...enteredCredentials,username:value})
        }else{
            setEnteredCredentials({...enteredCredentials,password:value})
        }
    }

    const toggleShowPassWord=()=>{
        setRevealPassword(!revealPassword)
    }

    const handleCheckAuthentication=()=>{
        const {correctUsername, correctPassword } = logInCredentials
        const {username, password}= enteredCredentials
        if((username===correctUsername)&&(password===correctPassword)){
            dispatch(switchAuthentication())
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)
            window.alert("Login success || credentials saved in localstorage")
        }else{
            window.alert("Wrong credentials, contact Ayush for support!")
        }
    }
    return <Container>
        <div className="card">
            <img src={logoImage} alt="logo"/>
            <p>Think-it</p>
        <div className="credentials">
            <div>
            <label htmlFor="username" className="label">Username: </label>  
            <input id="username" onChange={handleInputChange} value={enteredCredentials.username}/>
            </div>
            <div id="passwordDiv">
            <label htmlFor="password" className="label">Password: </label>  
            <input id="password" type={revealPassword?"":"password"} onChange={handleInputChange} value={enteredCredentials.password}/>
            <button id="toggleRevealPassWord" onClick={toggleShowPassWord}>{revealPassword?"Hide":"Show"}</button>
            </div>
            
        </div>
        <button id="loginButton" onClick={handleCheckAuthentication}>Login</button>    
        </div>
    </Container>
}

export default LoginPage

const Container=styled.div`

display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;

img{
    border-radius: 50%;
    height: 100px;
}

p{
    font-weight: 500;
    font-size: 30px;
    margin: 0;
}

.credentials {
    div{
        display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top:10px;
    }
}

button {
    cursor:pointer;
}

#passwordDiv{
    position: relative;
}

#toggleRevealPassWord{
    position: absolute;
    right:0;
}

#loginButton{
    margin-top:10px;
}


`