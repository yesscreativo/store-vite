import Data from "./data.json"
import "./product.css"



function Product() {
    console.log(Data)
    return (
        <div className="Product">
            <div className="img-product">
                <div>
                    <img src={Data.image} alt="producto" /> 
                </div>
            </div>
            <div className="cont-product">
                <span>{Data.rating.rate}</span>
                <p className="category">{Data.category}</p>
                <h1>{Data.title}</h1>
                <p className="price">{Data.price}</p>
                <p className="description">{Data.description}</p>
            </div>
        </div>
    )
}
export default Product