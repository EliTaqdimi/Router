import { useNavigate, useParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import './article.css'
import { useEffect } from 'react';


export default function Article() {

  const {id}= useParams();

  // or
  // const params= useParams();
  // Params.id

  const url="http://localhost:3000/articles/" + id
  const {data:article ,isLoading,error}=useFetch(url);
  const navigate= useNavigate()


  useEffect(()=>{
    if(error){
      setTimeout(()=>navigate('/'),2000)
    }
  },[error])
    
  
  return (
    <div >
          {isLoading && <div>loding...</div>}
          {isLoading && <div>{error}</div>}
          {article && (
      <div className='article'>
          <h2>{article.title}</h2>
          <p className='author'>By:{article.author}</p>
          <p className='body'>{article.body}</p>
        </div>
      )}
      
    </div>
  )
}
