import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Crypto(props) {
  const [value, setValue] = useState({})

  const baseUrl = 'https://api.coincap.io/v2/assets/'

  useEffect(() => {
    axios
      .get(baseUrl + props.asset)
      .then((res) => {
        setValue(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [props.asset])

  return <div>Bitcoin data coming!</div>
}
