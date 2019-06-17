import React from "react"

function AppDetails(props) {
    return (
      <div className="App">
        <h1>{props.app.name}</h1>
        <img height="200px" src={props.app.image} />
        <p>{props.app.description}</p>
        <p>Category: {props.app.category}</p>
        <p>{props.app.rating}</p>
        {
          props.app.reviews.map(review => <h4>{review}</h4> )
        }
        <button onClick={() => props.addToPortfolio(props.app)}></button>
      </div>
    );
  }
  
  export default AppDetails;

//   {
//     id: 1,
//     name: 'Freeletics',
//     image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/81/55/8f/81558ff2-3a6d-7492-e960-1bf0a06e5b48/AppIcon-1x_U007emarketing-85-220-0-1.png/1024x1024bb.png',
//     description: 'One of the most downloaded exercise apps, with 36 Million user in over 160 countries.',
//     rating: 4.5,
//     reviews: [
//         "Shit",
//         "Terrible",
//         "I want my money back!",
//         "I GAINED weight."
//     ],
//     category: "Fitness",
//     price: null
// }