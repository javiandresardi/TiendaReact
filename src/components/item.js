import React from 'react';


/*Aqui comvierto los props de disponibilidad en state para poder manipularlo
  y actualiza el nuevo disponible al hacer click en comprar
*/
class Item extends React.Component{
  constructor(props){
    super(props)
    this.state={
      available: this.props.available
    }
  }

  render(){
    return(
      <div className="col s12 m6 l3">
        <div className="card large hoverable">
          <div className="card-image">
            <img src={'/img/'+this.props.imgPath} alt={this.props.name}/>
            <span className="card-title amber-text">{this.props.name}</span>
          </div>
          <div className="card-content">
            <div>
              <p>Precio: ${this.props.price}</p>
              <p>Disponible {this.state.available}</p>
            </div>
            <div></div>
          </div>
          <form onSubmit={(e)=>{
            e.preventDefault();
            const amount = parseInt(e.target.elements.amount.value)
            this.props.handleCompra({
              name: this.props.name,
              price: this.props.price,
              available:this.state.available,
              imgPath: this.props.imgPath,
              purchased: amount
              })
              this.setState((prevState)=>({available: prevState.available - amount}));
              }
            }
          className="card-action">
            <div className="card-action-left">
              <button
              className="btn-floating btn-small amber"
              onClick={(e)=>{
                     this.props.showDetail({
                      name: this.props.name,
                      price: this.props.price,
                      imgPath: this.props.imgPath,
                      available: this.state.available
                      })}
                }
              >
              <i className="material-icons">visibility</i>
              </button>
              <button
                className="btn-floating btn-small indigo">
                  <i className="material-icons">shopping_basket</i>
                </button>
            </div>
            <div className="card-action-right">
              <input
                type="number"
                name="amount"/>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default Item
