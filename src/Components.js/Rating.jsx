import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'


function Rating({value}) {

  const makeStars = (value) => {
    const stars = []
    const [whole, part] = parseFloat(value).toString().split(".")
    // console.log(whole, part)
    for (let i = 0; i < whole; i++) stars.push(100)
    if (part) stars.push(50)
    for (let i = whole; i < (part ? 4 : 5); i++) stars.push(0)
    return stars
  }
  return (
    <div className="Rating" id="Rating">
      {
        makeStars(value).map((value,i) => value === 0 ? <i id={i+1} key={i} className="empty fas fa-star"></i> : value === 50 ? <i id={i+1} key={i} className="half fas fa-star"></i> : <i id={i+1} key={i} className="full fas fa-star"></i>)
      }
    </div>
  )
}

export default Rating