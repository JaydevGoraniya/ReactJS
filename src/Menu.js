import { Link } from "react-router-dom"

function Menu(){
    return(
        <>
            <h2 style={{textAlign:"center"}}><Link to="/Category">Category</Link> | <Link to="/Subcategory">Subcategory</Link> | <Link to="/Product">Product</Link>
            </h2>
        </>
    )
}
export default Menu