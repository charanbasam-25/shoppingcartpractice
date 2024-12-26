import { useNavigate } from "react-router-dom";

const ProductTile = ({ product }) => {
    const naviagate= useNavigate();

    function handleNavigateToProduct(productId) {   

    naviagate(`/productdetail/${productId}`);
        console.log("navigate to product")
    }

    return (
      <div style={{padding: "1rem", border: "1px solid red", borderRadius: "0.375rem", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", backgroundColor: "#ffffff", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ height: "8rem", width: "100%" }}>
          <img
            src={product.images[0]}
            alt={product.title}
            style={{ height: "100px", width: "100px", objectFit: "cover", borderRadius: "0.375rem" }}
          />
        </div>
        <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", fontWeight: "600", color: "#1f2937", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {product.title}
        </div>
        <div style={{ marginTop: "0.25rem", color: "#4b5563", fontSize: "0.875rem", fontWeight: "500" }}>
          ${product.price}
        </div>
        <button onClick={()=>handleNavigateToProduct(product.id)} style={{ marginTop: "auto", padding: "0.5rem 1rem", backgroundColor: "#3b82f6", color: "#ffffff", fontSize: "0.75rem", borderRadius: "0.375rem", cursor: "pointer", border: "none", transition: "background-color 0.3s" }} onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"} onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}>
          Detail
        </button>
      </div>
    );
  };
  
  export default ProductTile;