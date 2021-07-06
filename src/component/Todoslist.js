import React , { useState } from 'react' 
import  {Grid, makeStyles,Button } from '@material-ui/core';
function Todoslist(props) {
  const [todos , settodos] = useState([])
  const SumbitHandler = (event) => {
    event.preventDefault()
    props.onAddItem(todos)
    console.log(todos)
  }
  const useStyles = 
  makeStyles({
    input : {
      width : '370px' , 
      height : '30px' , 
      margin : '15px', 
      'margin-top'  : '200px' ,  
    } ,
    button : {
      'background-color' : '#6b705c' ,
      color : 'white' , 
      'font-size'  : '14px' , 
    }   , 
    item : {
      margin : 'auto'
    } , 
    text : {
      'font-size' : '25px' ,
      'font-style' : 'bold' ,
      marginTop : '17px'
    }})
  const classes = useStyles()
  const InputHandler = (event) => {
    settodos(event.target.value)
  }
  return ( 
    <Grid container>
      <Grid item className = {classes.item}>
          <form onSubmit = {SumbitHandler}>
      <input className = {classes.input}  onChange = {InputHandler} value = {todos} placeholder='Write your goal'/>
        
        <Button className = {classes.button} type = 'submit'>Add item</Button>
        </form>
      </Grid>
      </Grid>

  );
}
export default Todoslist;
