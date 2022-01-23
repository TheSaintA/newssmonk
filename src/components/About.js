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
        <div className="container newsContainer">
       
            <div className="row">
                <div className="col-md-12">
                    <h3>About</h3>
                    <p class="text-wrap">News Monk is the revolutionary digital product from the house of The Saint. Your one stop solution for Breaking News,  Magazines, Newspapers, & much more. News Monk is the millennial way to stay ahead.</p>
                    <p>With Latest Breaking News every second, 800+ Magazines, Famous Blogs, and News websites from India and all over the world.</p>
                    <p><b>Your News, Your Language</b></p>
                    <hr/>
                </div>
                <div className="col-md-12">
                    <h4>BREAKING NEWS ALERT</h4>
                    <p>With a personalized home screen experience stay updated on breaking news. Keep up with all the Top Stories on a single click & share your favorite local and global news.</p>
                </div>
                <div className="col-md-12">
                    <h4>DAILY NEWSPAPERS</h4>
                    <p>News Monk brings before you all the famous newspapers for free. Yes folks it has almost 250+ leading newspapers including the regional ones. That is why we say Your Region, Your News..</p>
                </div>
                <div className="col-md-12">
                    <h5>Features</h5>
                    <ul>
                        <li>Read magazines and newspaper without downloading them.</li>
                        <li>Cleaner interface and intuitive navigation to enhance your reading experience.</li>
                        <li>You can read magazines issues and newspaper archives from past.</li>
                        <li>Offline Reading - Read news in offline mode even without internet, using the offline reading feature</li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <h4>SUPPORT</h4>
                    <p>Reach out to us at <a href="https://github.com/TheSaintA/newssmonk">The Saint</a> for any queries, feedback or in need of assistance.</p>
                    <p>You may also contact us on our social media pages:</p>
                    <ul>
                        <li>Facebook : <a href="https://www.facebook.com/wani2wani">https://www.facebook.com/wani2wani</a></li>
                    </ul>
                </div>
                <div className="col-md-12">
                    <p className="text-center">Stay connected, Stay informed & Stay entertained!</p>
                </div>
            </div>
        </div>
    </div>;
  }
}
