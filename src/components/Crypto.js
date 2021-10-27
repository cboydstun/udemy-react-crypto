import React, { useState } from 'react'

export default function Crypto(props) {
  const [value, setValue] = useState(props.asset)

  return (
    <div>
      <h1>We want {value}!</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
