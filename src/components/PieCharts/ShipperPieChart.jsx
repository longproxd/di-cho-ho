import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from 'react-google-charts'

function PieChart() {
  const [result, setResult] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/thongkekhuvucshipper')
      .then(res => setResult(res.data))
  }, [])

  const pieData = [
    ['Phân Vùng', 'Số Shipper'],
    ['Vùng Xanh', result && result.Green],
    ['Vùng Đỏ', result && result.Red],
    ['Vùng Vàng', result && result.Yellow],
  ]
  
  const pieOptions = {
    title: 'Số lượng Shipper theo từng phân vùng',
    pieHole: 0.4,
  }

    return (
      <div className="container mt-5">
        <Chart
          width={'600px'}
          height={'500px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    )
}

export default PieChart