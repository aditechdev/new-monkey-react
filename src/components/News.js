import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor() { 
        super();
        this.state = {
            articles: [],
            loading: false
            
        }
    }

    async componentDidMount() { 
        let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=32b8331338fd40b1a9394e416937ae99&page=2";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // this.state({articles: parsedData.articles})
        this.setState({articles:parsedData.articles})
    }
  render() {
    return (
        <div className='container my-3'>
            <h2>News Monkey- Top Headlines</h2>
           
            <div className='row'>
                {this.state.articles.map((e) => {
                    return <div className='col-md-4' key={e.url}>
                        <NewsItem title={e.title != null ? e.title.slice(0, 44) : ""} description={e.description != null ? e.description.slice(0, 88) : ""} imageUrl={e.urlToImage == null ? "https://images.unsplash.com/photo-1622428051717-dcd8412959de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80": e.urlToImage} newsUrl={ e.url} />
                    </div>
                })}
               
               
            </div>
      </div>
    )
  }
}

export default News