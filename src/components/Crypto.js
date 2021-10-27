import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Crypto(props) {
  const [value, setValue] = useState({})

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        setValue(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('finally finished with GET')
      })
  }, [])

  return <div>Bitcoin data coming!</div>
}
