import { React, useState } from 'react'

const List = () => {
  const [boxName, setBoxName] = useState('')
  const [boxWeight, setBoxWeight] = useState('')
  const [boxColor, setBoxColor] = useState('#f6b73c')
  const [boxCountry, setBoxCountry] = useState('Sweden')

  const onBoxName = (e) => setBoxName(e.target.value)
  const onBoxWeight = (e) => setBoxWeight(e.target.value)
  const onBoxColor = (e) => setBoxColor(e.target.value)
  const onBoxCountry = (e) => setBoxCountry(e.target.value)

  function validateBoxData(boxData) {
    if (boxData.name === '' || boxData.name === null) {
      alert('Please provide a name.')
      return false
    }
    if (
      boxData.weight === '' ||
      boxData.weight === null ||
      isNaN(boxData.weight)
    ) {
      alert('Please provide a weight.')
      return false
    }
    if (boxData.color === '' || boxData.color === null) {
      alert('Please provide a color.')
      return false
    }
    if (boxData.country === '' || boxData.country === null) {
      alert('Please provide a country.')
      return false
    }
    if (boxData.weight < 0) {
      alert('Please provide a positive weight.')
      setBoxWeight(0)
      return false
    }
    if (checkBlueColor(boxData.color)) {
      alert(
        'Blue color and its shades are not permitted, please provide another color.'
      )
      return false
    }
    return true
  }

  function checkBlueColor(color) {
    let red = color.substring(1, 3)
    let green = color.substring(3, 5)
    let blue = color.substring(5, 7)

    let decRed = parseInt(red, 16)
    let decGreen = parseInt(green, 16)
    let decBlue = parseInt(blue, 16)

    if (decRed + decGreen < decBlue) {
      return true
    }
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newWeight = parseFloat(boxWeight)

    const data = {
      name: boxName,
      weight: newWeight,
      color: boxColor,
      country: boxCountry,
    }
    console.log(data)

    if (validateBoxData(data)) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      }
      await fetch('http://localhost:8080/api/addbox', requestOptions)
        .then((res) => {
          if (res.status === 200) {
            alert(`You order was successfully submitted`)
          }
        })
        .catch((err) => {
          alert(
            `You order was not submitted. The server encountered an unexpected problem.`
          )
          console.error(err.status)
        })
    }
  }

  return (
    <form data-testid="form-box" onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="name">Name</label>
        </div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={boxName}
          onChange={onBoxName}
          required
        />
      </div>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="weight">Weight</label>
        </div>
        <input
          name="weight"
          type="number"
          placeholder="Weight"
          value={boxWeight}
          onChange={onBoxWeight}
          required
        />
      </div>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="color">Color</label>
        </div>
        <input
          className="input-pointer"
          name="color"
          type="color"
          value={boxColor}
          onChange={onBoxColor}
          data-testid="input-color"
        />
      </div>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="country">Country</label>
        </div>
        <select
          className="input-pointer"
          name="country"
          value={boxCountry}
          onChange={onBoxCountry}
          required
        >
          <option value="Sweden">Sweden </option>
          <option value="China">China</option>
          <option value="Brazil">Brazil</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
      <div className="save-button-container">
        <div className="save-button-inner-container">
          <button>Save</button>
        </div>
      </div>
    </form>
  )
}

export default List
