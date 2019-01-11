import React, { Component } from 'react';
// import logo from './logo.svg';
// import Button from 'antd/lib/button';
import './App.css';
// import ButtonGroup from 'antd/lib/button/button-group';
import axios from 'axios'




export default class Upload extends Component {
    state = {
        selectedFile: null
    }
    // fileSelectedHandler selects the event and targets image 
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })

    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://firebasestorage.googleapis.com/v0/b/instaham-78e55.appspot.com/o/meatonfork.jpeg?alt=media&token=ce57906d-0561-416d-bac6-d9f94a53b378', fd)
            .then(res => {
                console.log(res);
            })

    }
    constructor() {
        console.log()
        super()

    }

    render() {
        return (
            <div className="Upload">
            {/* input type=file aloows you to pick a file */}
            {/* onChange fires every time the user picks a file */}
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}

