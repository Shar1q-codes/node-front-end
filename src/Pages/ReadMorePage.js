import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import EverywhereUseCards from '../Components/EverywhereUseCards';


const ReadMorePage = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://node-bcknd-project.herokuapp.com/api/details`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    const location = useLocation();
    const {title , img,  description} = location.state
  return (
    <div className='read-more-container'>
    <div className='read-page-title'>{title}</div>
    <div>
    <img src={img} alt="" className='read-page-pic'/>
    </div>
    <div>
    
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>

        <p>{description}</p>
    </div>
    <div className='more-siren'>
    <div className='read-more-siren'>More From Siren </div>
    <div>{data.sort(()=> Math.random() - Math.random()).slice(0,3).map((n)=>{ return(
         <EverywhereUseCards
         key={n.id}
         articleid={n.id}
         imgUrl={n.ImageAsset}
         title={n.Title}
         description={n.BlogContent.slice(0, 200)}
         author={n.author}
         category={n.CategoryName}
         date={n.Publisheddate}
         />
         )})}</div>
         </div>
    </div>
  )
}

export default ReadMorePage