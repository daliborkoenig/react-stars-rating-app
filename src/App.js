import './App.scss';
import Rating from './Components.js/Rating';
import { useState , useEffect } from 'react'


function App() {
  const [rating, setRating] = useState(0)
  const [ratingSet, setRatingSet] = useState(false)

  useEffect(() => {
    console.log(rating);
  } , [rating])  

  const handleClick = (e) => {
      if (e.target.id === "1") {
        if (e.nativeEvent.offsetX < 23) {
          console.log("this");
          setRating(0.5)
        }
        else {
          setRating(1)
        }
        setRatingSet(true)
      }
      else if (e.target.id === "2") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(1.5)
        }
        else {
          setRating(2)
        }
        setRatingSet(true)
      }
      else if (e.target.id === "3") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(2.5)
        }
        else {
          setRating(3)
        }
        setRatingSet(true)
      }
      else if (e.target.id === "4") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(3.5)
        }
        else {
          setRating(4)
        }
        setRatingSet(true)
      }
      else if (e.target.id === "5") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(4.5)
        }
        else {
          setRating(5)
        }
        setRatingSet(true)
      }

  }
  const handleMouse = (e) => {
      if (!ratingSet && e.target.id === "1") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(0.5)
        }
        else {
          setRating(1)
        }
      }
      else if (!ratingSet && e.target.id === "2") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(1.5)
        }
        else {
          setRating(2)
        }
      }
      else if (!ratingSet && e.target.id === "3") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(2.5)
        }
        else {
          setRating(3)
        }
      }
      else if (!ratingSet && e.target.id === "4") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(3.5)
        }
        else {
          setRating(4)
        }
      }
      else if (!ratingSet && e.target.id === "5") {
        if (e.nativeEvent.offsetX < 23) {
          setRating(4.5)
        }
        else {
          setRating(5)
        }
      }
  }
  return (
    <div className="App" onMouseMove={handleMouse} onClick={handleClick}>
      <h1 class="title">Your rating is: {ratingSet && rating}</h1>
      <Rating value={rating} />
    </div>
  );
}

export default App;
