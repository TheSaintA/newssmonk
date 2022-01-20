import React, { Component } from 'react';
import Spinner from "./Spinner";
import logo from './logo.png'

export default class About extends Component {
    constructor(){
        super();
        this.state = {
            loading : false     
        }
    }
  render() {
    return <div>
        <div className="container">
        <div className="row">
                <div className="col">
                    <h2 className='text-center'><img src={logo} style={{width:"50px"}} className="img-fluid"/>  NewsMonk - Top Headlines</h2>
                    <hr/>
                    {this.state.loading && <Spinner/>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, debitis? Fugiat eligendi possimus voluptatum, officia obcaecati aperiam cupiditate dignissimos, sequi, ab enim eaque. Ut perspiciatis alias voluptatibus omnis ullam quam!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eos quisquam accusantium beatae, provident quas illo quibusdam necessitatibus magnam dolorem itaque perspiciatis! Quam suscipit quo totam cupiditate tempora nulla excepturi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem delectus consequatur perferendis neque eum magni est. Totam, eveniet provident voluptatum at, exercitationem consequatur illum, tempora adipisci fugiat magni numquam?
                </div>
                <div className="col-md-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, debitis? Fugiat eligendi possimus voluptatum, officia obcaecati aperiam cupiditate dignissimos, sequi, ab enim eaque. Ut perspiciatis alias voluptatibus omnis ullam quam!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eos quisquam accusantium beatae, provident quas illo quibusdam necessitatibus magnam dolorem itaque perspiciatis! Quam suscipit quo totam cupiditate tempora nulla excepturi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem delectus consequatur perferendis neque eum magni est. Totam, eveniet provident voluptatum at, exercitationem consequatur illum, tempora adipisci fugiat magni numquam?
                </div>
                <hr/>
                <div className="col-md-12">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, debitis? Fugiat eligendi possimus voluptatum, officia obcaecati aperiam cupiditate dignissimos, sequi, ab enim eaque. Ut perspiciatis alias voluptatibus omnis ullam quam!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eos quisquam accusantium beatae, provident quas illo quibusdam necessitatibus magnam dolorem itaque perspiciatis! Quam suscipit quo totam cupiditate tempora nulla excepturi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem delectus consequatur perferendis neque eum magni est. Totam, eveniet provident voluptatum at, exercitationem consequatur illum, tempora adipisci fugiat magni numquam?
                </div>
            </div>
        </div>
    </div>;
  }
}
