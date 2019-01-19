import { Upload, Icon, Modal } from 'antd';
import React from 'react'
import axios from 'axios'

class UploadButton extends React.Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: '-1',
            name: '',
            status: 'done',
            url: '',
        }],
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ file, event }) => {
        console.log(event)
        console.log(file)

        console.log(file)
        const formData = new FormData();
        formData.append('ham_image', file.originFileObj)
        console.log(formData)

        //this.setState({ fileList })
        axios.post('/uploadImage', formData).then((response) => {
            this.setState({
                url: response.data
            })
            console.log(this.state.url)
            
        })
        
    }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    // name="ham_image"
                    // action="/uploadImage"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default UploadButton