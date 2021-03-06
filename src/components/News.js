import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      results: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      results: parsedData.results,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  // handleNextClick = async () => {
    //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     results: parsedData.articles,
    //     loading: false
    //   })
    // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };
  // handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=922b08d9c5d54c4fb16b0d9ee21f215a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState.loading({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  state = {
    items: Array.from({ length: 20 })
  };
  fetchMoreData = async () => {
    
   this.setState({page: this.state.page + 1})
   const url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      results: this.state.results.concat(parsedData.results),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    
  };
  render() {
    return (
      <div>
        <div className="container newsContainer">
          <div className="row">
            <div className="col">
              <h2 className="text-center">
                
                {this.props.title} - Top Headlines
              </h2>
              <hr />
              {/* {this.state.loading && <Spinner />} */}
            </div>
          </div>
          </div>
          
          <InfiniteScroll
            dataLength={this.state.results.length}
            next={this.fetchMoreData}
            hasMore={this.state.results.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row">
              {
                this.state.results.map((element) => {
                  return (
                    <div className="col-md-4 my-2" key={element.link}>
                      <NewsItem
                        mode={this.props.mode}
                        title={element.title ? element.title.slice(0, 50) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 300)
                            : ""
                        }
                        imageUrl={element.image_url}
                        link={element.link}
                        author={element.creator}
                        source={element.source_id}
                        publishedAt={element.pubDate}
                      />
                    </div>
                  );
                })}
            </div>
            {/* <hr /> */}
        </div>
          </InfiniteScroll>
        {/* <div
          className="container-fluid position-fixed"
          style={{ bottom: "2px", left: "auto", width: "100%" }}
        >
          <div className="row">
            <div className="col d-flex justify-content-between">
              <button
                onClick={this.handlePrevClick}
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                role="button"
              >
                Previous{" "}
              </button>
              <button
                onClick={this.handleNextClick}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                className="btn btn-dark"
                role="button"
              >
                Next
              </button>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default News;
