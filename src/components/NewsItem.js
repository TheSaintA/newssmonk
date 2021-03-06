import React, { Component } from "react";

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, link, author, publishedAt, source} = this.props;
    return <div>
      
        <div className={`card bg-${this.props.mode} border-0  px-0" style={{width: "18rem"}`}>
        <span style={{right:"-10%",top:"4%"}} class="position-absolute d-flex p-2 m-0 translate-middle badge rounded-pill bg-danger">
          {source}
          <span class="visually-hidden">Latest News</span>
        </span>
            <img style={{maxHeight:"150px"}} src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/z/world-news-11655845.jpg"} className="card-img-top rounded shadow" alt="..."/>
            <div className="card-body px-0">
                <p className="card-title  fw-bold rounded p-1 mx-0 ">{title}</p>
                <hr/>
                <p className="card-text p-2">{description}</p>
                <hr/>
                <p className="card-text mx-2 fs-6">{author?author:"Uknown"} | {new Date(publishedAt).toGMTString()}</p>
                <a rel="norefferrer" href={link} target="_blank" className="btn btn-danger mx-2">Read more...</a>
            </div>
        </div>
        
    </div>;
  }
}

export default NewsItem;
