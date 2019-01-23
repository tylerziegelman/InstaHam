import { Modal, Button } from 'antd';
import { Icon } from 'antd';
import React from 'react'
import './Header.css'
import UploadButton from './UploadButton' 
import axios from 'axios'
import { defaultCipherList } from 'constants';
let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}
class PostModal extends React.Component {
  constructor(){
    super()
    this.state = {
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
   

    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
   
    this.setState({
      visible: false,
    });
  }

  handleInputChange(e){
    
    
    this.setState({ description: e.target.value });

    
  }

  handleChange = ({ file, event }) => {
   
    const formData = new FormData();
    formData.append('ham_image', file.originFileObj)
  

    //this.setState({ fileList })
    axios.post(`${host}/uploadImage`, formData).then((response) => {
        this.setState({
            image_url: response.data
        })
        
        
    })
    
}

handleSubmitPost = () => {
  
  axios.post(`${host}/post`, {
    user_id: this.props.userData.user_id,
    image_url: this.state.image_url,
    description: this.state.description
  },{
    headers: {
      Authorization: localStorage.getItem('instaham-jwt')
    }
  })
  
  // this.handleInputChange(e,{value})
  
 
  this.setState({
    visible: false,
  });
}



  footer = () => {
    return <>
    <Button onClick= {this.handleCancel}>
      Cancel
    </Button>
    <Button onClick= {this.handleSubmitPost}>
      Post
    </Button>
    
    </>
  }

render() {
  return (
    <div>
      <Button type="default" className="post-button" onClick={this.showModal}>
        Post
        </Button>

      <Modal
        title="Upload Your Meat"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={this.footer()}
      >
        {/* <Button>
          {/* place to tie in post logic*/}
          {/* <Icon type="upload" /> Upload
            </Button> */} 

      <UploadButton handleChange={this.handleChange} />

        <textarea className="post-textarea" placeholder="Description of image" onChange={this.handleInputChange}></textarea>
      </Modal>
    </div>
  );
}
}
export default PostModal
