import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

const customers = [
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'춘향이',
  'birthday':'880101',
  'gender':'여자',
  'job':'직장인'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'방자',
  'birthday':'930303',
  'gender':'남자',
  'job':'초등생'
}
]

class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />);
          })
        }        
      </div>
      
    );
  }
}

export default App;
