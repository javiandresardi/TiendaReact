import React from 'react';
import { Link } from 'react-router';
import firebaseApp from '../firebase';

class Login extends React.Component {
  constructor(props){
    super(props);

    this.handleSignIn = this.handleSignIn.bind(this);

    //State
    this.state ={
        email: '',
        password: '',
        error:{
          message: ''
        }

    }
  }

  handleSignIn(e){

    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState(()=>({error}))
    })
  }


  render(){
    
    return(
      <div className="row login">
        <div className="container">
        <div className="row">
          <div className="col s10 offset-s1 m6 offset-m3">
            <div className="card white login-form">
              <div className="text-center">Ingreso</div>

              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input
                type="email"
                placeholder="ingresa tu email"
                onChange={e => {
                  e.persist();
                  return this.setState(()=> ({email: e.target.value}))
                }}
                required/>
              </div>

              <div className="input-field">
                <i className="material-icons prefix">vpn_key</i>
                <input
                type="password"
                placeholder="ingresa tu password"
                onChange={e => {
                  e.persist();
                  return this.setState(()=> ({password: e.target.value}))
                }}/>
              </div>

              <div className="input-field" >
                <p>Registrate si no eres usuario</p>
                <p className="error">{this.state.error.message}</p>
                <div className="row">
                <div className="col">
                  <button
                  onClick={this.handleSignIn}
                  className="btn-flat amber white-text login-btn"
                  style={{marginTop:'5px'}}
                  >Entra
                  </button>
                </div>
                <div className="col">
                  <Link to={'/signUp'}
                  className="btn-flat indigo white-text login-btn"
                  style={{marginTop:'5px'}}>
                  Registrate
                  </Link>
                </div>
              </div>


              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Login
