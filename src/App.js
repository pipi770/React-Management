// import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import TableBody from '@material-ui/core/TableBody';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';

const styles = {
  root: {
    witdth:'100%',
    marginTop : 30,
    overflowX : "auto"
  },
  table:{
    minWidth: 1080
  }
}

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>);
              })
            }
          </TableBody>
        </Table>  
      </Paper>
      
    );
  }
}

export default withStyles(styles)(App);
