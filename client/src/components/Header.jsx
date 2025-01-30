import { Link } from "react-router-dom"


const Header = () => {
  return (
   <header className="">
    <div>
        <h1>PJ TaskList</h1>
    </div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
   </header>
  )
}

export default Header