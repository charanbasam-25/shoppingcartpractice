import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../StateManagement/Context"
import { useEffect } from "react";


const ProductDetail = () => {
const{getEachProductDetails,eachProductDetails, handleAddToCart}=useContext(ShoppingCartContext);
const {id}=useParams();

useEffect(()=>{
    getEachProductDetails(id);
},[]);

console.log(eachProductDetails,":getEachProductDetails");

return (
    <div className='product-detail' style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign:'start'}}>
        {eachProductDetails ? (
            <div style={{display:"flex", gap:"20px"}}>
            <div>
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{eachProductDetails.name}</h1>
                <p style={{ fontSize: '16px', color: '#555' }}>{eachProductDetails.description}</p>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Price: ${eachProductDetails.price}</p>
                <img loading="lazy" src={eachProductDetails.images[0]} alt={eachProductDetails.name} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    {eachProductDetails.images.map((image, index) => {
                        return<img laoding="lazy" src={image} alt={eachProductDetails.name} style={{ width: '100%', maxWidth: '100px', height: '100px', padding:"20px", border:"2px solid green" }} />
                    })}
                    </div>
            </div>
            <div style={{alignSelf:"center"}}>
                <button onClick={()=>handleAddToCart(eachProductDetails)} style={{backgroundColor:"white", padding:"10px", border:"1px solid black", color:"black"}}>Add to Cart</button>

            </div>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
}
export default ProductDetail