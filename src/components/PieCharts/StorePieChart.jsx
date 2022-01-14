import React, { Component } from 'react'
import Chart from 'react-google-charts'

const pieData = [
  ['Phân Vùng', 'Số lượng cửa hàng'],
  ['Vùng Đỏ', 11],
  ['Vùng Vàng', 2],
  ['Vùng Xanh', 2],
]

const pieOptions = {
  title: 'Số lượng Cửa Hàng theo từng phân vùng',
  pieHole: 0.4,
}

class PieChart extends Component {
  render() {
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
}

export default PieChart