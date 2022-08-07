import React, { useEffect, useState } from 'react'
import EverywhereUseCards from '../Components/EverywhereUseCards'

const BlogPage = ({category}) => {
    const [data, setData] = useState([])

    useEffect(() =>{
        fetch(`https://node-bcknd-project.herokuapp.com/api/details`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])
  return (
    <div>
        <h1>{category}</h1>
        {
            data.sort(()=>Math.random() - Math.random()).slice(5).filter((article)=>{
                return article.CategoryName === category
            })
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
  )
}

export default BlogPage