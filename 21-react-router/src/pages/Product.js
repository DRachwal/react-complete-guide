import { Link, useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Product {id} page</h1>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  )
}

export default Product
