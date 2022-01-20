import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    return <div>
      
        <div className="card shadow" style={{width: "18rem;"}}>
        <span style={{left:"90%",top:"2%"}} class="position-absolute p-2 translate-middle badge rounded-pill bg-danger">
          {source}
          <span class="visually-hidden">Latest News</span>
        </span>
            <img style={{maxHeight:"130px"}} src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/z/world-news-11655845.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title badge bg-dark">{title}</h5>
                <p className="card-text text-wrap shadow-lg rounded p-2">{description}</p>
                <p className="card-text fs-6">By {author?author:"Uknown"} on {new Date(publishedAt).toGMTString()}</p>
                <a rel="norefferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more...</a>
            </div>
        </div>
    </div>;
  }
}

export default NewsItem;
