import React,{useEffect, useState} from 'react'
import bg from "../../src/assets/bg-cafe.jpg"

const MainContainer = () => {
    const [data,setData] = useState("")

    useEffect(()=>{
        ApiData()
    },[])
    const ApiData = async() =>{
        const data = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        const json = await data.json()
        setData(json)
        console.log(json)
    }
  return (
    <div >
      <img className='sm:h-10 lg:h-20 xl:h-60' src={bg} alt='bg_img'/> 
    </div>
  )
}

export default MainContainer