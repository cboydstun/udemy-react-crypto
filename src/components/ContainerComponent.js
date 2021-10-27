//declare main dependencies
import React, { useState } from 'react'

//import bootstrap components
import { Container, Dropdown } from 'react-bootstrap'

//import custom component
import Crypto from './Crypto'

export default function ContainerComponent() {
  //set state
  const [value, setValue] = useState('bitcoin')

  return (
    <Container>
      {/* dropdown to select different values */}
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          Select Blockchain Asset
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setValue('bitcoin')}>
            Bitcoin
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setValue('ethereum')}>
            Ethereum
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setValue('bitcoin-cash')}>
            Bitcoin Cash
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setValue('litecoin')}>
            Litecoin
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setValue('dogecoin')}>
            Dogecoin
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* render Crypto component */}
      <Crypto asset={value} />
    </Container>
  )
}
