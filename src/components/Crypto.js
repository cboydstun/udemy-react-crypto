//import main dependencies
import React, { useState, useEffect } from 'react'

//import axios to make http requests
import axios from 'axios'

//import utilities to format numbers
import { formatDollars, formatPercentage } from '../utils/format'

//import bootstrap components
import { Button, Spinner, Card } from 'react-bootstrap'

export default function Crypto(props) {
  //define initial object state
  const [value, setValue] = useState({})

  //set base URL for API requests
  const baseUrl = 'https://api.coincap.io/v2/assets/'

  //enable useEffect to fetch data from API
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

  //define function to refresh data
  const refreshPrice = () => {
    axios
      .get(baseUrl + props.asset)
      .then((res) => {
        setValue(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Card>
      {value.data ? (
        <div>
          <h4>Name: </h4>
          <p>{value.data.name}</p>
          <h4>Price: </h4>
          <p>{formatDollars(value.data.priceUsd)}</p>
          <h4>Change 24hr: </h4>
          <p>{formatPercentage(value.data.changePercent24Hr)}%</p>
          <h4>Symbol: </h4>
          <p>{value.data.symbol}</p>
          <Button variant="warning" onClick={refreshPrice}>
            Refresh
          </Button>
        </div>
      ) : (
        <div className="spinner text-center">
          <Button variant="warning" onClick={refreshPrice}>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      )}
    </Card>
  )
}
