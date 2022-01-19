import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return <div>
      
        <div className="card" style={{width: "18rem;"}}>
            <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/z/world-news-11655845.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-wrap">{description}</p>
                <a rel="norefferrer" href={newsUrl} target="_blank" className="btn btn-dark">Go somewhere</a>
            </div>
        </div>
    </div>;
  }
}

export default NewsItem;
