import { Link } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import './home.css'

export default function Home() {

  const {data:articles,isLoading, error}=useFetch('http://localhost:3000/articles');

  return (
    <div className='home'>
      <h1>Articles</h1>
      {isLoading && <div>loding...</div>}
      {isLoading && <div>{error}</div>}
      {articles && articles.map((article)=>(
        <div key={article.id} className='card'>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`} className='link-article'>Read more...</Link>
        </div>
      ))}
        </div>
      

      
    
  )
}
