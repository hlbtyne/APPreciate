import React from "react"

const AppDetails = props => {

    const progressBar = Math.round(props.app.rating / 5) / 10

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
          {props.app.name}
        </h2>

        <div style={{display: "flex"}}>
          <img 
            src={props.app.image}
            alt="{props.app.name} logo"
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
            <h4>Category: {props.app.category}</h4>
            <p>{props.app.description}</p>
            <h4>{props.app.rating} <i className="fas fa-star small"></i></h4>
            {
              
                <button 
                    onClick={() => props.addOrRemove(props.app)} 
                    className="btn btn-outline-secondary btn-lg" 
                    style={{marginTop: 30}}
                  >
                    {
                      (props.portfolioApps.includes(props.app))
                        ? "Remove from portfolio"
                        : "Add to portfolio"
                    }
                    
                  </button>
            }

          </div>
        </div>

        <div className="jumbotron">
          <div className="form-group" style={{textAlign: "left"}}>
            <h3 className="display-5">Leave a review</h3>
            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            <button type="submit" class="btn btn-outline-secondary" style={{marginTop: 10}}>Submit</button>
          </div>
          {/* <h3 className="display-5" style={{textAlign: "left", marginTop: 30}}>Reviews</h3> */}
          {
            props.app.reviews.map(review => {
              return(
                <div style={{textAlign: "left"}}>
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
  
  export default AppDetails;