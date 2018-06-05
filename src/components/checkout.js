import React from 'react';
class Checkout extends React.Component {

  constructor(props){
    super(props);
    this.handleRendering = this.handleRendering.bind(this);
    this.state = {
      title: 'Carrito de Compras'
    }
  }
  ///render if compras existe
  handleRendering(){
    if (this.props.compras.length > 0) {
      return(
        <div className="row">
          <div className="col s12 m8">

            <ul className="collection">

            { this.props.compras.map((compra)=>(
                <li key={compra.name}
                className="collection-item avatar">
                  <img
                  src={'/img/'+compra.imgPath}
                  alt={compra.name}
                  className="circle"/>
                  <span
                  className="title">{compra.name}</span>
                  <p>Cantidad: {compra.purchased}</p>
                  <p>Subtotal:${compra.price * compra.purchased}</p>
                </li>
              ))
            }

            </ul>
          </div>
          <div className="col s12 m4">
            <div className="row">
              <h4>Total ${this.props.getTotal()}</h4>
            </div>
            <div className="row">
              <button
              className="btn-flat indigo white-text"
              onClick={this.props.onCompra}>Pagar</button>
              <button className="btn-flat red white-text">Cancelar</button>
            </div>
          </div>
        </div>
      )
    }
  }
  render(){
    return(
      <div>
        <div className="card white checkout">
          <div className="row text-center">
            <div className="col s12">
                <h3 className="flow-text">{this.state.title}</h3>
            </div>
          </div>
            {this.handleRendering()}
        </div>
      </div>
    )
  }

}



export default Checkout
