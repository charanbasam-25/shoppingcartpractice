import { useContext } from "react";
import { ShoppingCartContext } from "../../StateManagement/Context";
import ProductTile from "./ProductTile";

const ProductList = () => {
  const { productDetails } = useContext(ShoppingCartContext);
  console.log(productDetails, ":productList");

return (
    <div style={{ padding: "1rem", backgroundColor: "#f7fafc" }}>
        {productDetails && productDetails.length > 0 ? (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "5rem",
                }}
            >
                {productDetails.map((product) => (
                    <ProductTile key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <p style={{ textAlign: "center", color: "#718096" }}>
                No products available.
            </p>
        )}
    </div>
);
};

export default ProductList;
