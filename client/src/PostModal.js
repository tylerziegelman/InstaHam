import { Modal, Button } from 'antd';
import { Input, Icon } from 'antd';
import React from 'react'
import './Header.css'

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
        >
            <Button>
            {/* place to tie in post logic*/}
                <Icon type="upload" /> Upload
            </Button>
            <textarea className="post-textarea" placeholder="Description of image"></textarea>
            </Modal>
      </div>
    );
  }
}
export default PostModal
