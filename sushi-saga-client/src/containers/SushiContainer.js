import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className='belt'>
        {
          <Sushi
            sushis={props.sushiList}
            select={props.select}
            deduction={props.deduction}
          />
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
