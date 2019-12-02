import React, {Component} from 'react';
import {Item} from '/home/viktor/Desktop/react/testreact/src/Element/ls'
class Element extends Component {
  constructor(props){
    super(props);
    this.state={
      value:0
    }
  }
  render(){
    return(
      <>
          <div onClick={this.increase}>
              {this.state.value}
            <Item/>
          </div>
      </>
    )
  }

  increase =()=>
  {
    console.log(this.state.value);
    this.setState({value:this.state.value+1})
  }
}



export default Element;
