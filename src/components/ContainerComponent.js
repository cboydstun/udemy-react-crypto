import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import Crypto from './Crypto'

export default function ContainerComponent() {
  const [value, setValue] = useState('bitcoin')

  return (
    <div>
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

      <Crypto asset={value} />
    </div>
  )
}
