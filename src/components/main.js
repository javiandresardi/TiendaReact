import React from 'react';
import Item from './item.js'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search: ""
    }
  }
  render(){
    let filterContent = this.props.productos.filter(
      (producto)=>{
        return producto.name.toLowerCase().includes(this.state.search.toLowerCase());
      }
    )
    return(
      <div className="card store-body">
        <div className="row">
          <div className="col s6 m5">
          <h4 className="flow-text">
          Catalogo de productos
          </h4>
          </div>
          <div className="col s6 m7">

            <div className="row">
              <div className="col s6"></div>
              <div className="col s12 m6 input-field">
              <i className="material-icons prefix">search</i>
              <input type="text"
                id="item"
                placeholder="Que estas bscando.."
                onChange={(e)=>{
                    e.persist();
                   this.setState(()=> ({search: e.target.value}))

                }}
                className="text-indigo"/>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
        {
          filterContent.map((producto)=>(
              <Item
              key={producto.name}
              name={producto.name}
              price={producto.price}
              imgPath={producto.imgPath}
              available={producto.available}
              handleCompra={this.props.handleCompra}
              showDetail ={this.props.showDetail}
              />
          ))
        }

        </div>
      </div>
    )
  }
}

export default Main;
// <div className="row"></div>
