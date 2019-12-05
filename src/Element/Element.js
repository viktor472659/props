import React, {Component} from 'react';


class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.increase.bind(this);
    }


      componentDidMount(){
        console.log('componentDidMount');
      }

      shouldComponetUpdate(nextProps,nextState){
        console.log(this.props,this.state);
        console.log('shouldComponetUpdate');
        return (true||false)
      }
      componentWillUnmount(){
      console.log('componentWillUnmount');
      }
      componentDidUpdate(prevProps,prevState)
      {
        console.log('componentDidUpdate')
        console.log(prevProps,prevState);
        console.log(this.props,this.state)
      }


    render() {
        return (
            <div>
                <div>state: {this.state.value} </div>
                <div>
                    props: {this.props.item}
                </div>
                <div>
                    {this.props.children}
                </div>
                <button onClick={this.increase}>increase</button>

            </div>
        )
    }

    increase = () => {
        console.log(this.props.item, ': ' , this.state.value);
        this.setState({value: this.state.value + 1})
    }

}



export default Element;
