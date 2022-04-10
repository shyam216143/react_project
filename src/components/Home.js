import axios from "axios"
import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeState: ""
        }
    }


    updateData() {
        const data = {
            "userId": "2234",
            "id": "2223",
            "title": "Okay dexter New",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
            .then((data) => {
                console.log(data);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    delData() {
        const data = {
            "userId": "2234",
            "id": "2223",
            "title": "Okay dexter New",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        axios.delete('https://jsonplaceholder.typicode.com/posts/1', data)
            .then((data) => {
                console.log(data);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    postData() {
        const data = {
            "userId": "2234",
            "id": "2223",
            "title": "Okay dexter New",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then((data) => {
                console.log(data);

            })
            .catch((err) => {
                console.log(err);
            })
    }
    commentData() {
        const data = {
            "userId": "2234",
            "id": "2223",
            "title": "Okay dexter New",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments', data)
            .then((data) => {
                console.log(data);

            })
            .catch((err) => {
                console.log(err);
            })
    }



    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p> Welcome To Axios Demo</p>
                <button onClick={this.postData}>Submit</button>
                <button onClick={this.updateData}>Update</button>
                <button onClick={this.delData}>Delete</button>
                <button onClick={this.commentData} >comment</button>
            </div>
        )
    }
}

export default Home

