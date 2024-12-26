import { useEffect, useState, useParams } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/auth";

const ShoppingCartContext = createContext(null);

function ShoppingCart({ children }) {
  const [productDetails, setProductDetails] = useState([]);
  const [eachProductDetails, setEachProductDetails] = useState(null);
  const navigate = useNavigate();
  const [totalCost, setTotalCost] = useState(0);
  const [registeredFormData, setRegisteredFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({});
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  async function getProductDetails() {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    const products = result.products;
    setProductDetails(products);
  }

  async function getEachProductDetails(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await res.json();
    setEachProductDetails(result);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  function handleAddToCart(product) {
    console.log(product, "product added to cart");

    const cpyOfCartItems = [...cartItems];

    const findIndex = cpyOfCartItems.findIndex(
      (item) => item.id === product.id
    );
    if (findIndex !== -1) {
      cpyOfCartItems[findIndex].quantity += 1;
      setCartItems(cpyOfCartItems);
      console.log(cpyOfCartItems[findIndex]);
      navigate("/cart");
      return;
    } else {
      product.quantity = 1;
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, product])
      );
      setCartItems([...cartItems, product]);
      navigate("/cart");
    }
  }

  function findTotalCost() {
    let totalCost = 0;
    cartItems.forEach((item) => {
      totalCost += item.price * item.quantity;
    });
    setTotalCost(totalCost);
  }

  function handleRemoveProductFromCart(eachProductDetails) {
    console.log("remove button clicked");
    const cpyOfCartItems = [...cartItems];
    const findIndex = cpyOfCartItems.findIndex(
      (item) => item.id === eachProductDetails.id
    );
    console.log(findIndex, "findIndex");
    if (findIndex !== -1) {
      cpyOfCartItems.splice(findIndex, 1);
    }
    setCartItems(cpyOfCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyOfCartItems));
    navigate("/cart");
    findTotalCost();
  }

  function IncreaseProductQuantity(item) {
    const cpyOfCartItems = [...cartItems];
    const findIndex = cpyOfCartItems.findIndex(
      (product) => product.id === item.id
    );
    cpyOfCartItems[findIndex].quantity += 1;
    setCartItems(cpyOfCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyOfCartItems));
    findTotalCost();
    navigate("/cart");
  }

  function ReduceProductQuantity(item) {
    const cpyOfCartItems = [...cartItems];
    const findIndex = cpyOfCartItems.findIndex(
      (product) => product.id === item.id
    );
    cpyOfCartItems[findIndex].quantity -= 1;
    if (
      cpyOfCartItems[findIndex].quantity === 0 ||
      cpyOfCartItems[findIndex].quantity < -1
    ) {
      cpyOfCartItems.splice(findIndex, 1);
    }
    setCartItems(cpyOfCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyOfCartItems));
    findTotalCost();
    navigate("/cart");
  }

  function registerWithFireBase() {
    console.log(registeredFormData, ":registeredFormData");
    return createUserWithEmailAndPassword(
      auth,
      registeredFormData.email,
      registeredFormData.password
    );
  }

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      checkAuthState();
    };
  },[]);
console.log(user,"user---------------")
  return (
    <ShoppingCartContext.Provider
      value={{
        productDetails,
        eachProductDetails,
        getEachProductDetails,
        handleAddToCart,
        findTotalCost,
        cartItems,
        handleRemoveProductFromCart,
        ReduceProductQuantity,
        IncreaseProductQuantity,
        totalCost,
        registeredFormData,
        setRegisteredFormData,
        registerWithFireBase,
        user
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export { ShoppingCart, ShoppingCartContext };
