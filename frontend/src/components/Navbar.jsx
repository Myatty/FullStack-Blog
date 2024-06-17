import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h1>BLOG.io</h1>
        <div>
            <NavLink to={"/"} >Posts</NavLink>
            <NavLink to={"/create-post"} >Create Post</NavLink>

        </div>
    </nav>
  )
}

export default Navbar