import React, { useEffect, useState } from 'react'
import EverywhereUseCards from '../Components/EverywhereUseCards'
import TheLatestCard from '../Components/TheLatestCard'
import TopCardContainer from '../Components/TopCardContainer'


const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://node-bcknd-project.herokuapp.com/api/details`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  return (
    <div>
       <div>{
            data.sort(()=>Math.random() - Math.random()).slice(0,1)
            .map((n)=>(
                <TopCardContainer
                key={n.id}
                articleid={n.id}
                imgUrl={n.ImageAsset}
                title={n.Title}
                description={n.BlogContent}
                category={n.CategoryName}
                />
            ))
        }</div>
       <div className='the-latest-container'>
            <div>
                <h1 className='latest-heading'>The Latest</h1>
            <hr />
            </div>
            
            <div className='flex-box'>
            {
            data.sort(()=>Math.random() - Math.random()).slice(0,3)
            .map((n)=>(
                <TheLatestCard
                key={n.id}
                articleid={n.id}
                imgUrl={n.ImageAsset}
                title={n.Title}
                description={n.BlogContent}
                category={n.CategoryName}
                />
            ))
        }
            </div>
        
       </div>
       <div className='latest-article-container'>
        <div>
            <h1 className='latest-heading'>
                Latest Article
            </h1>
            <hr />
        </div>
        <div className='latest-article-card-container'>
            <div className='everywhere-card-container'>
            {
            data.sort(()=>Math.random() - Math.random()).slice(0,3)
            .map((n)=>(
                <EverywhereUseCards
                key={n.id}
                articleid={n.id}
                imgUrl={n.ImageAsset}
                title={n.Title}
                description={n.BlogContent}
                category={n.CategoryName}
                />
            ))
        }
            </div>
            <div className='ad'>

            </div>
        </div>
       </div>
    </div>
  )
}

export default Home