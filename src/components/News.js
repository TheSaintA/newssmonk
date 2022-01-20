import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import logo from './logo.png'
import PropTypes from 'prop-types';

export class News extends Component {

      static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: "general"
      }
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
        
      }
      constructor(){
        super();
        this.state = {
            articles: [],
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles : parsedData.articles,
        totalResults:parsedData.totalResults,
        loading: false
      });
      console.log(parsedData);
    }
    handleNextClick = async ()=>{
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;  
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
    }
    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;  
      this.setState.loading({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
    }
    
  render() {
    return <div>
        <div className="container my-lg-3">
            <div className="row">
                <div className="col">
                    <h2 className='text-center'><img src={logo} style={{width:"50px"}} className="img-fluid"/>  NewsMonk - Top Headlines</h2>
                    <hr/>
                    {this.state.loading && <Spinner/>}
                </div>
            </div>
            
            <hr/>
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                 return <div className="col-md-3 my-2" key={element.url}> 
                  <NewsItem  title={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
              })}
            </div>
            <hr/>
            
        </div>
        <div className="container-fluid position-fixed" style={{bottom : "2px",left:"auto",width:"100%"}}>
          <div className="row">
                <div className="col d-flex justify-content-between">
                  <button onClick={this.handlePrevClick} disabled={this.state.page<=1}  className="btn btn-dark"  role="button">Previous </button>
                  <button onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark"  role="button">Next</button>
                </div>
              </div>
        </div>
    </div>;
  }
}
export default News;
