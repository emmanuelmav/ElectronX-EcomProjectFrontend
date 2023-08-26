
import { Link } from 'react-router-dom'

const ProductButton = ({ color, id }) => {

    const styles1 = "bg-orange1 text-white hover:bg-orange2"
    const styles2 = "bg-tranparent text-black outline outline-1 outline-black hover:bg-black hover:text-white"
    const styles3 = "bg-black text-white outline outline-1 outline-black hover:bg-white hover:text-black"

    // let styles = color == "orange" ? styles1 : styles2;
    let styles;
    if (color == "orange") {
        styles = styles1
    } else if (color == "white") {
        styles = styles2
    } else {
        styles = styles3
    }

    return (
        <Link to={`/product/${id}`} >
            <div className={`
       ${styles} cursor-pointer  text-center 
       w-[160px] h-[48px] flex justify-center items-center`}>
                <p>SEE PRODUCT</p>
            </div>
        </Link>
    )
}


export default ProductButton