import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
  
  const [articles,setarticles] = useState([])
  const [loading,setloading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalresults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  const newsUpdate = async ()=> {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100)
  }


  useEffect(()=>{
    document.title = `ONE PIECE NEWS - ${capitalizeFirstLetter(props.category)}`
    newsUpdate();
  },[])
  

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page+1)
    setloading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    setarticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setloading(false)
  }

    console.log("Rendering")
    return (
      <>
      <h2 className='text-center'> Top Headlines in {capitalizeFirstLetter(props.category)}</h2>
      
      <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalresults}
      loader={<Spinner />}
    >

      <div className='container'>

        <div className='row'>
          {articles.map((element) => {
            return <div className='col md-4 '>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>
    </>
    )
  }

export default News

News.defaultProps = {
  country: "in",
  pageSize: 3,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}