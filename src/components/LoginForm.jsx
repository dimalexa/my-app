import { useState } from "react";

export default function LoginForm(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    function ChangePassword(event){
        setPassword(event.target.value);
    }
    function ChangeLogin(event){
        setLogin(event.target.value);
    }

    return (
        <form>
                <label htmlFor="login"> Your login</label >
                <input type='text' id='login' value={ login } onChange={ChangeLogin}/>
                <hr />
                <label htmlFor="password"> Your password</label >
                <input type='text' id='password' value={ password } onChange={ChangePassword}/>
                <button>Log in</button>
                <button>Sign in</button>

                {login === password &&
                    <p> Login and password are equal</p>
                }
        </form>
    );
}