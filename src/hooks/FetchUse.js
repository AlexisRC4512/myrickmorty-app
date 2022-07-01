import React from 'react'

export const FetchUse = (url,callback) => {
  return async()=>{
    try {
        const data=await fetch(url)
       const jsonData= await data.json();
        callback && callback(jsonData)
    } catch (error) {
        
    }
}
}
