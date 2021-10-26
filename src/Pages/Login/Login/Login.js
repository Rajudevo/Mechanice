import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const {handleRegistration} = useAuth();
    const {handleEmailChange} = useAuth();
    const {handlePasswordChange} = useAuth();
    const {error} = useAuth();
    const {toggleLogIn} = useAuth();
    const {isLogin} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
      signInUsingGoogle()
      .then(result => {
        history.push(redirect_url);
    })

    }
    return (
        <div className="mx-5">
            <h2>Google Sign in</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google sign in</button>
            <br/> <br />

            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ?  'Login' : 'Register'}</h3>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" class="form-control" id="inputPassword3" required/>
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div >
        <input onChange={toggleLogIn} class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1"> Already registered? </label>
        
         </div> 
        </div>
     
  </div>
  <div className="row mb-3 text-danger">{error}</div>
  <button type="submit" className="btn btn-primary mb-5">{isLogin ? 'Login' : 'Register' }</button>
</form>
        </div>

        
    );
};

export default Login;