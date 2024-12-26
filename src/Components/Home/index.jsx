import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate= useNavigate()
  return (
    <div>
      <div className="home">Home</div>
      <button onClick={()=>navigate('/productlist')}>See products</button>
    </div>
  );
};

export default Home;
