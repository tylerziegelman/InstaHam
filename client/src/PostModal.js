import { Modal, Button } from 'antd';
import { Icon } from 'antd';
import React from 'react'
import './Header.css'
import UploadButton from './UploadButton' 
import axios from 'axios'
import { defaultCipherList } from 'constants';

class PostModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);

    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleSubmitPost = () => {
    axios.post('/post', {
      url: "",
      description:""
    },{
      headers: {
        Authorization: localStorage.get('instaham-jwt')
      }
    })
    
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

<UploadButton/>

        <textarea className="post-textarea" placeholder="Description of image"></textarea>
      </Modal>
    </div>
  );
}
}
export default PostModal
