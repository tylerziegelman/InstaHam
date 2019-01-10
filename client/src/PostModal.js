import { Modal, Button } from 'antd';
import { Input, TextArea } from 'antd';
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
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
             
            <Input size="small" placeholder="small size" />
            <textarea className="post-textarea"></textarea>
        </Modal>
      </div>
    );
  }
}
export default PostModal
