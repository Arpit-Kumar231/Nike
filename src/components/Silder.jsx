import './Slider.css'
const Silder = ({click , open}) => {
  return (
    <div>
        <button className={open ? "dark" : "white"} onClick={click}>Dark Mode</button>


    </div>
  )
}

export default Silder