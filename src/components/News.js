import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import InfiniteScroll from "react-infinite-scroll-component";




export default function News(props) {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    props.setprogress(20);
    let data = await fetch(url);
    props.setprogress(30);
    
    setloading(true)
    props.setprogress(50);
    let parsedata = await data.json();
    console.log(parsedata);
    props.setprogress(70);
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setprogress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirst(props.category) } @ NewsFever `;
    updateNews() // eslint-disable-next-line
  }, [])



  // const handlePreclick = async () => {
  //   setpage(page - 1)
  //   updateNews()
    //   console.log("pre");

    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=202c0010646d425799467ddb0d96ea00&page=${
    //   }&pageSize=${props.pageSize}`;
    //   let data = await fetch(url);
    //   this.setState({ loading: true });
    //   let parsedata = await data.json();
    //   console.log(parsedata);
    //     setpage(page - 1)
    //       setarticles(parsedata.articles)
    //       setloading(false)
    //    
  // };

  // const handleNextclick = async () => {
  //   setpage(page + 1)
    // updateNews()
    //   console.log("next");
    //   if (
    //     !(
    //       Math.ceil(this.state.totalResults / props.pageSize)
    //     )
    //   ) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=202c0010646d425799467ddb0d96ea00&page=${page + 1}&pageSize=${props.pageSize}`;
    //      setloading(true)
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     console.log(parsedata);
    //       setpage(page + 1)
    //       setarticles(parsedata.articles)
    //       setloading(false)
    //    
    //   }
  // };
  const fetchMoreData = async () => {
    props.setprogress(30);
    setpage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page + 1}`;
    let data = await fetch(url);
    props.setprogress(30);
    setloading(true)
    let parsedata = await data.json();
    props.setprogress(70);
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
    setloading(false)
    props.setprogress(100);
  };


  return (
    <> 
    
      <h1 className="text-center text-decoration"style={{ margin:'100px', margintop: '150px'}}>
       - News Fever - Top {capitalizeFirst(`${props.category}`)}Headlines -
      </h1>
      
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div
                  className="d-flex justify-content-center col-md-4 my-4"
                  key={index}
                >
                  <NewsItem
                    tittle={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    Newsurl={element.url}
                    Time={element.publishedAt}
                    Author={element.author}
                    Source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* // <div className="container d-flex justify-content-between my-5 ">
       //   <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePreclick}>
       //     &larr; Perivous
       //   </button>
       //   <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleNextclick}>
       //     Next &rarr;
       //   </button>
       // </div> */}
    </>
  );

}

