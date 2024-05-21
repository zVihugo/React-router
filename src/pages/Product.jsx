import {useParams, Link} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {
  const {id} = useParams()

  //Carregamento dado individual

  const url = "http://localhost:3000/products/" + id

  const {data: product, loading, error} = useFetch(url)

  console.log(product)

  return (
    <>
        <p>Id do produto: {id}</p>
        {error && <p>Ocorreu um erro ao carregados os dados do produto!</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h2>{product.name}</h2>
                <p>R$: {product.price}</p>
                {/* nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product