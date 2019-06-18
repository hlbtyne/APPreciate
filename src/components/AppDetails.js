import React, { Component } from "react"

class AppDetails extends Component {

    progressBar = Math.round(this.props.app.rating / 5) / 10

    render() {
      return (
        <div className="App">
  
          <h2 
            className="display-5" 
            style={{
              padding: 15, 
              paddingLeft: 30, 
              textAlign: "left", 
              background: "#e9ecef",
              marginBottom: 0
              }}>
            {this.props.app.name}
          </h2>
  
          <div style={{display: "flex"}}>
            <img 
              src={this.props.app.image}
              alt="{this.props.app.name} logo"
              style={{
                height: 400,
                margin: 20,
                borderRadius: 20
              }} 
            />
  
            <div style={{
              textAlign: "left", 
              margin: 20
            }}>
              <h4>Category: {this.props.app.category}</h4>
              <p>{this.props.app.description}</p>
              <h4>{this.props.app.rating} <i className="fas fa-star small"></i></h4>
              {
                
                  <button 
                      onClick={() => this.props.addOrRemove(this.props.app)} 
                      className="btn btn-outline-secondary btn-lg" 
                      style={{marginTop: 30}}
                    >
                      {
                        (this.props.portfolioApps.includes(this.props.app))
                          ? "Remove from portfolio"
                          : "Add to portfolio"
                      }
                      
                    </button>
              }
  
            </div>
          </div>
  
          <div className="jumbotron">
            <form onSubmit={(event) => this.props.addReview(event)} className="form-group" style={{textAlign: "left"}}>
              <h3 className="display-5">Leave a review</h3>
              <textarea className="form-control" name="review" rows="3"></textarea>
              <button type="submit" className="btn btn-outline-secondary" style={{marginTop: 10}}>Submit</button>
            </form>
            {
              this.props.appReviews.map(review => {
                return(
                  <div key={review} style={{textAlign: "left"}}>
                    <hr className="my-4" />
                    <div style={{
                      display: "flex", flexDirection: "row"
                    }}>
                      <div style={{flex: 0.95}}>
                        <span className="lead">{review}</span>
                      </div>
  
                      <div 
                        className="btn-group" 
                        role="group" 
                        aria-label="Basic example" 
                        style={{
                          display: "flex", 
                          flexDirection: "column"
                        }}>
                        <button type="button" className="btn">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button type="button" className="btn">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </div>
  
                    </div>
                  </div>
                )
              })
            }
            <hr className="my-4" />
  
          </div>
  
        </div>
      );
    }
  }
  
  export default AppDetails;