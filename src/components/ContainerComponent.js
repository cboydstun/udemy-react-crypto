import React, { useState } from 'react'

import Crypto from './Crypto'

export default function ContainerComponent() {
  const [value, setValue] = useState('bitcoin')

  return (
    <div>
      <Crypto asset={value} />
    </div>
  )
}
