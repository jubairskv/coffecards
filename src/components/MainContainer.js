import React,{useEffect, useState} from 'react'

const mainContainer = () => {
    const [data,setData] = useState("")
    
    useEffect(()=>{
        ApiData()
    })
    const ApiData = async() =>{
        const data = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        const json = await data.json()
        setData(json)
        console.log(json)
    }
  return (
    <div>mainContainer</div>
  )
}

export default mainContainer