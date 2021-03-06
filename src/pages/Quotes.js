import React, { Component } from 'react';
import axios from 'axios';
import DefaultPage from './Default';
import { Button, Card } from 'react-onsenui';

class Quotes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      qoutes: [],
      isError: false,
      message: null
    }
  }

  componentDidMount () {
    this.getQuote();
  }

  getQuote () {
    const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=4&_=' + new Date().getTime();
    axios.get(url)
    .then((response) => {
      this.setState({qoutes: response.data});
    })
    .catch((error) => {
      this.setState({message: 'Fail Get Quote Today !!', isError: true})
      console.log(error);
    });
  }

  strip (html) {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  render () {
    const qoutes = this.state.qoutes;
    const isError = this.state.isError;

    return (
      <section style={{margin: '16px'}}>
        {this.state.message && <p>{this.state.message}</p>}
        {!isError && qoutes.map((data) => {
          return (<Card>
            <div className='title'>
              {data.title}
            </div>
            <div className='content' style={{fontSytle: 'italic'}}>{this.strip(data.content)}</div>
          </Card>)
        })}
        <Button onClick={() => this.getQuote()} modifier='large'>Refresh Quote</Button>
      </section>
    )
  }
}

export default DefaultPage(Quotes);