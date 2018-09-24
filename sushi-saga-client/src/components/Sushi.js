import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  sushiEaten = (object) => {
    let chosenSushi = this.props.sushis.find( sushi => sushi.id === object.id)
    console.log(chosenSushi.img_url)
    chosenSushi.img_url = ''
    this.props.select(chosenSushi)
    this.props.deduction(chosenSushi)
    this.setState( { chosenSushi })
  }
  

  render() {
    let chosenSushi = ''
    return (
      this.props.sushis.slice(0, 4).map(sushi =>
        <div className='sushi'>
          <div className='plate' key={sushi.id}
            onClick={ () => this.sushiEaten(sushi) }>
            {
              chosenSushi === true
                ? null
                : <img src={sushi.img_url} width='100%' />
            }
          </div>
          <h4 className='sushi-details'>
            {sushi.name} - ${sushi.price}
          </h4>
        </div>
      )

    )
   }
}

export default Sushi
