import { updateProfile } from "firebase/auth";
import { ShoppingCartContext } from "../../StateManagement/Context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Register = () => {
  const {
    registeredFormData,
    setRegisteredFormData,
    registerWithFireBase,
    user,
  } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisteredFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function registerOnSubmit(event) {
    event.preventDefault();
    registerWithFireBase()
      .then((res) => {
        if (res.user) {
          updateProfile(res.user, {
            displayName: registeredFormData.name,
          });
        }
        console.log(res);
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  }
  console.log(registeredFormData, ":registeredFormData");

  if (user) {
    navigate("/profile");
  } else {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Register</h1>
        <form
          onSubmit={registerOnSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <input
            name="name"
            value={registeredFormData.name}
            onChange={handleChange}
            type="text"
            placeholder="Username"
            style={{
              padding: "10px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            name="email"
            value={registeredFormData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            style={{
              padding: "10px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            name="password"
            value={registeredFormData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            style={{
              padding: "10px",
              width: "100%",
              boxSizing: "border-box",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
};

export default Register;
