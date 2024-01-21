import { useState,useEffect } from  "react"; 

 export const useFetch =(url)=>{
  const[data ,setData]=useState(null);
  const[isLoading ,setIsLoading]=useState(false);
  const[error ,setError]=useState(null);


  useEffect(()=>{
    const fetchData=async()=>{
      setIsLoading(true)
      try{
        const response=await fetch(url)
        const json=await response.json()
  
        setIsLoading(false)
        setData(json)
      }catch(error){
        setError('please wait....') 
      }
    
    }
    fetchData()
  },[url])

  return {data,isLoading,error}
}
