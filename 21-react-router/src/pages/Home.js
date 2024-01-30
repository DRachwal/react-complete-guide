import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const navigateHandler = () => navigate('/products')
  return (
    <>
      <h1>Home page</h1>
      <Link to="products">Products</Link>
      <button onClick={navigateHandler}>Products</button>
    </>
  )
}

export default Home
