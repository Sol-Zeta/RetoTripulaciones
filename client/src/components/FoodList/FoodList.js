import React, { Component } from 'react';
import Food from '../Food/Food'
import './FoodList.css'
class FoodList extends Component{
    constructor(props){
        super(props)
        this.state = {
            restaurants: []
        }
    }
    componentDidMount(){
        this.checkRes()
    }

    componentDidUpdate(){
        this.checkRes()
    }

    checkRes(){
        if(this.props.getResta){
            this.setRestaurants(this.props.addResta())
        }
    }

    setRestaurants(arr){
        this.setState({
            ...this.state,
            restaurants: arr
        })
    }

    render(){
        return(
            <section className='foodList'>
                <h3 className={'foodList-h3'}>{this.props.title}</h3>
                <section className={'foodList-blockrestaurants'}>
                    <section className='foodList-restaurants'>
                        {this.state.restaurants.map( (ele,i) => { if(i < 20) return <Food restaurants={ele} key={i} history={this.props.history}/> })}
                    </section>
                </section>
            </section>  
        )
    }
}

export default FoodList