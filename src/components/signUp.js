import React from 'react';
import { Link } from 'react-router';
import firebaseApp from '../firebase'

class signUp extends React.Component {
constructor(props){
  super(props);

  this.handleSignUp = this.handleSignUp.bind(this);

  this.state ={
      email: '',
      password: '',
      error:{
        message: ''
      }

  }
}

  handleSignUp(e){
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
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
            <form className="card white login-form" onSubmit={e => e.preventDefault()}>
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input type="email"
                placeholder="ingresa tu email"
                onChange={e => {
                  e.persist();
                  return this.setState(()=> ({email: e.target.value}))
                }}/>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">vpn_key</i>
                <input type="password"
                placeholder="ingresa tu password"
                onChange={e => {
                  e.persist();
                  return this.setState(()=> ({password: e.target.value}))
                }}/>
              </div>

              <div className="row">
                <div className="col">
                  <button
                  className="btn btn-small lime white-text login-btn"
                  onClick={this.handleSignUp}
                  style={{marginTop:'5px'}}>
                  Registrate
                  </button>
                </div>
                <div className="col">
                  <Link to={'/'}
                  className="btn btn-small red white-text login-btn"
                  style={{marginTop:'5px'}}>
                  regresa
                  </Link>
                </div>
              </div>
              <div className="row center-text">
                {this.state.error.message}
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default signUp
