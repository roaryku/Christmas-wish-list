import { Component } from "react";
import icon from './present.png';

export class WishList extends Component{
    constructor(){
        super()

        this.state = {
            userInput: '',
            wishList: []
        }
    }

    onChangeEvent(e){
        this.setState({userInput: e});
    }
    addItem(input){
        if(input === ''){
            alert("Please enter a wish")
        }
        else{
            let listArray = this.state.wishList;
            listArray.push(input);
            this.setState({WishList: listArray, userInput: ''})
        }
    }

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }

    deleteItem(){
        let listArray = this.state.wishList;
        listArray = [];
        this.setState({wishList: listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input type="text" placeholder="type your wishing"
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput}/>
            </div>

            <div className="container">
                <button onClick = {() => this.addItem(this.state.userInput)}
                className="btn add">Add</button>
            </div>
            <ul>
               {this.state.wishList.map((item, index) => (
                <li onClick = {this.crossedWord} key = {index}>
                    <img src={icon} width="40px" alt="icon"/>
                    {item}
                </li>
               ))}
            </ul>
            <div className="container">
                <button onClick = {() => this.deleteItem()} 
                className="btn delete">Delete</button>
            </div>
            </form>
        </div>
        )
    }
}