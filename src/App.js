import React from 'react';
// import logo from './logo.svg';
// import ToDo from './components/input'
// import Shopping from './Shopping/Shopping'
import data from "./Restaurant/data.json"
import Restaurant from "./Restaurant/Restaurant"
import "./App.css"


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterRating: 1,
      paymentMethod: "all",
      sortMethod: null
    }
  }
  handleRating = rating => {
    this.setState({
      filterRating: rating
    });
  }

  handlePayment = payment => {
    this.setState({
      paymentMethod: payment
    })
  }
  handleCost = order => {
    this.setState({
      sortMethod: order
    })
  }
  render() {
    const { filterRating, paymentMethod, sortMethod } = this.state;
    return (
      <div>
        <h1 style = {{textAlign : "center"}}>Restaurant Details</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h3>Ratings  :
              <button onClick={() => this.handleRating(4)}>4 Star</button>
              <button onClick={() => this.handleRating(3)}>3 Star</button>
              <button onClick={() => this.handleRating(2)}>2 Star</button>
              <button onClick={() => this.handleRating(1)}>1 Star</button>
              <button onClick={() => this.handleRating(0)}>All</button>
            </h3>
          </div>
          <div>
            <h3>
              Payment Options :
              <button onClick={() => this.handlePayment("cash")}>Cash Only</button>
              <button onClick={() => this.handlePayment("card")}>Card Only</button>
              <button onClick={() => this.handlePayment("all")}>All</button>
            </h3>
          </div>
          <div>
            <h3>
              Cost :
          <button onClick={() => this.handleCost("des")}>High to Low</button>
              <button onClick={() => this.handleCost("asc")}>Low to High</button>
            </h3>
          </div>
        </div>
        <div  className="App">
        {data
          .filter(({ rating, payment_methods }) => {
            const { cash, card } = payment_methods;
            let paymentCondition = true;
            if (paymentMethod === "cash") {
              paymentCondition = cash ? true : false
            } else if (paymentMethod === "card") {
              paymentCondition = card ? true : false
            }
            return rating >= filterRating && paymentCondition
          })
          .sort((a, b) => {
            if (sortMethod === null) {
              return 0;
            }
            if (sortMethod === "asc") {
              return a.costForTwo - b.costForTwo
            }else{
              return b.costForTwo - a.costForTwo
            }
          })
          .map(item => (
            <Restaurant data={item} key={item.id} />
          ))}
          </div>
      </div>
    );
  }


}