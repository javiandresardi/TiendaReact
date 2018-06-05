import React from 'react';
import firebaseApp from '../firebase'
import * as request from 'superagent'

import Navbar from './nav.js';
import Main from './main.js';
import Checkout from './checkout.js';
import Detail from './detail.js';


class Labodega extends React.Component {

  constructor(props){
    super(props);

    this.handleCompra = this.handleCompra.bind(this);
    this.revelCompra = this.revelCompra.bind(this);
    this.hideCompra = this.hideCompra.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.signOut = this.signOut.bind(this);
    this.onCompra= this.onCompra.bind(this);

    this.state = {
      productos: [],
      compras: [],
      estado: "main",
      counter: 0,
      objToview: {}
    }
  }


  componentWillMount(){

    request
    .get('https://la-bodega-react.firebaseio.com/.json')
    .end((err, res)=>{
      this.setState(()=>({productos: res.body}))
    })
  }



  handleCompra(obj){
    this.setState((prevState) =>({compras: prevState.compras.concat(obj), counter: prevState + 1 }));
    }

   revelCompra(){
       this.setState(()=>({estado: 'compras'}))
    }

   hideCompra(){
     this.setState(()=>({estado: 'main'}))
   }
   showDetail(obj){
     this.setState(()=>({estado: 'detalle', objToview: obj}))
   }

   getTotal(){
     let total = 0
     for (let i = 0; i < this.state.compras.length; i++) {
       total+= this.state.compras[i].price * this.state.compras[i].purchased;
     }
     return total
   }

  handleViews(){
    if (this.state.estado === 'main') {
      return(
        <Main
         productos={this.state.productos}
         handleCompra={this.handleCompra}
         showDetail={this.showDetail}/>
      )
    }
     if (this.state.estado === 'compras') {
      return(
            <Checkout
            compras={this.state.compras}
            getTotal={this.getTotal}
            onCompra={this.onCompra}/>
      )
    }
    if(this.state.estado === 'detalle'){
      return(
        <Detail
        objToview={this.state.objToview}
        hideCompra={this.hideCompra}/>
      )
    }
  }


  onCompra(){
    this.setState(()=>({compras: []}))
  }

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return(
      <div className="row main">

        <div className="container">
        <Navbar
        revelCompra={this.revelCompra}
        hideCompra={this.hideCompra}
        counter={this.counter}
        signOut={this.signOut}/>
        {this.handleViews()}
      </div>
      </div>
    )
  }
}

export default Labodega
