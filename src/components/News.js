import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    
      constructor(){
        super();
        this.state = {
            articles: [],
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=1&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults});
      console.log(parsedData);
    }
    handleNextClick = async ()=>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){}else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=${this.state.page + 1}&pageSize=20`;  
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
    }
    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=${this.state.page - 1}&pageSize=20`;  
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
    }
  render() {
    return <div>
        <div className="container my-lg-3">
            <div className="row">
                <div className="col">
                    <h2> NewsMonk - Top Headlines</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
              {this.state.articles.map((element)=>{
                 return <div className="col-md-3 my-2" key={element.url}> 
                  <NewsItem  title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
              })}
            </div>
            <hr/>
            <div className="row">
              <div className="col d-flex justify-content-between">
                <button onClick={this.handlePrevClick} disabled={this.state.page<=1}  className="btn btn-dark" href="#" role="button">Previous </button>
                <button onClick={this.handleNextClick} disabled={this.state.page >= this.state.totalResults} className="btn btn-dark" href="#" role="button">Next</button>
              </div>
            </div>
        </div>
        
    </div>;
  }
}
export default News;
