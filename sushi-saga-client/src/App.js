import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

// Endpoint!
const API = 'http://localhost:3000/sushis'

class App extends Component {
  constructor () {
    super()
    this.state = { 
      sushis: [],
      sushiPrice: 0,
      balance: 100
    }
  }

  getSushis = () => {
    fetch(API).then( resp => resp.json()).then( sushiArray => this.setState({ sushis: sushiArray }))
  }
  
  selectedSushi = (chosenSushi) => {
    this.setState({ sushiPrice: chosenSushi.price})
  }

  deductCost = (currentBalance) => {
    let remaining = currentBalance - this.state.sushiPrice
    this.setState( { balance: remaining } )
    return remaining
  }

  componentDidMount() {
    this.getSushis()
  }

  render () {
    return (
      <div className='app'>
        <SushiContainer 
        sushiList={this.state.sushis}
        select={this.selectedSushi}
        deduction={this.deductCost}
        />
        <Table balance={this.deductCost} price={this.state.sushiPrice}/>
      </div>
    )
  }
}

export default App
