import React, { useState, useEffect } from 'react'

export default function Crypto(props) {
  const [value, setValue] = useState(props.asset)

  useEffect(() => {
    document.title = `We want ${value}`
  }, [value])

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
