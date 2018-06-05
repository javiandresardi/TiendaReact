import React from 'react';

class Detail extends React.Component {


  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return(
      <div>
        <div className="card white detail">
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <div className="card large">
                <div className="card-image">
                    <img src={'/img/'+this.props.objToview.imgPath} />
                    <span className="card-title amber-text">{this.props.objToview.name}</span>
                </div>
                <div className="card-content">
                  <p><strong>Price: </strong>{this.props.objToview.price}</p>
                  <p><strong>Available: </strong>{this.props.objToview.available}</p>
                </div>
                <div className="card-action">
                  <button
                    className="btn-floating btn-small indigo"
                    onClick={this.props.hideCompra}>
                    <i className="material-icons">shopping_basket</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default Detail
