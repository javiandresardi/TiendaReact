import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
 render(){
   return (
    <nav className="">
      <div className="nav-wrapper grey">
        <a onClick={(e)=>{this.props.hideCompra()}} className="brand-logo left">La Bodega</a>
        <ul className="right ">
          <li><a onClick={(e)=>{this.props.hideCompra()}}><i className="material-icons">store</i></a></li>
          <li><a onClick={(e)=>{this.props.revelCompra()}}><i className="material-icons">shopping_cart</i><span >{this.props.counter}</span></a></li>
          <li><a onClick={this.props.signOut}><i className="material-icons">lock</i></a></li>
        </ul>
      </div>
    </nav>
   )
 }
}

export default Navbar
