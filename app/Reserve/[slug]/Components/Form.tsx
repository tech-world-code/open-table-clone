import React from 'react'

export default function Form() {
  return (
    <form>
        <input className="standard-input" placeholder="First name" required></input>
        <input className="standard-input" placeholder="Last name" required></input> <br></br>
        <input className="standard-input" placeholder="Phone number" required></input>
        <input className="standard-input" placeholder="Email" required></input> <br></br>
        <input className="standard-input" placeholder="Ocassion (optional)"></input>
        <input className="standard-input" placeholder="Requests (optional)"></input> <br></br>
        <button className="standard-btn" type="submit" style={{width: "525px"}}>
          Complete reservation
        </button>
      </form>
  )
}
