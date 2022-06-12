import { React, useEffect, useState } from 'react'

const List = () => {
  const [boxes, setBoxes] = useState([])

  const fetchBoxData = async () => {
    const response = await fetch('http://localhost:8080/api/listboxes')
    const boxData = await response.json()
    setBoxes(boxData)
  }

  useEffect(() => {
    fetchBoxData()
  }, [])

  function calculateShippingCost(box) {
    let cost = 0
    if (box.country === 'Sweden') {
      cost = box.weight * 1.3
    } else if (box.country === 'China') {
      cost = box.weight * 4
    } else if (box.country === 'Brazil') {
      cost = box.weight * 8.6
    } else if (box.country === 'Australia') {
      cost = box.weight * 7.2
    }
    return +(Math.round(cost + 'e+2') + 'e-2')
  }

  let totalCost = 0
  let totalWeight = 0
  boxes.forEach((box) => {
    totalCost += calculateShippingCost(box)
    totalWeight += box.weight
  })
  totalCost = +(Math.round(totalCost + 'e+2') + 'e-2')

  return (
    <div>
      <div className="title-container">
        <h2>List of Boxes</h2>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Receiver</th>
              <th>Weight</th>
              <th>Box colour</th>
              <th>Shipping cost</th>
            </tr>
          </thead>
          <tbody>
            {boxes &&
              boxes.map((box) => (
                <tr key={box.id}>
                  <td>{box.name}</td>
                  <td>{box.weight} kilograms</td>
                  <td
                    style={{
                      background: box.color,
                    }}
                  ></td>
                  <td>{calculateShippingCost(box)} sek</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="summary-container">
        <h4>Total weight: {totalWeight}</h4>
        <h4>Total cost: {totalCost}</h4>
      </div>
    </div>
  )
}

export default List
