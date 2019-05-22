import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date){
  return date.toLocaleDateString()
}
const data = {
  author:{
    avatarUrl: 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg',
    name: 'pearyman'
  },
  text: 'niaho',
  date: new Date()
}

ReactDOM.render(<Comment {...data}/>, document.getElementById('root'));
