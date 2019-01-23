import React from 'react'
import { Card } from 'antd'
import './HamCard.css'
import Header from './Header'
import axios from 'axios'
let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}

export default class HamCard extends React.Component {



    constructor() {
        super()
        this.displayData = this.displayData.bind(this)
    }

    handleLike(e, postId,type) {
        e.preventDefault()
        axios.post(`${host}/like`, {
        
            post_id: postId

        }, {
                headers: {
                    Authorization: localStorage.getItem('instaham-jwt')
                }


            })
    }




    displayData(props) {
       
            return this.props.postData.map((post) => {
                

                    return <Card title={<div className="header-wrap" key={post.id}>
                        <h4>
                            {post.user.username}
                        </h4>
                        <h5>
                            {post.created_at}
                        </h5>
                    </div>
                    } bordered={true} style={{ width: 400 }}>
                        <div className="ham-image">
                            <img src={post.image_url} alt="meaty post" />
                        </div>
                        <div className="card-icons-wrapper">
                            <a className="fork-up" onClick={(e) => this.handleLike(e, post.id,true)}></a>
                            <a className="carrot-down" onClick={(e) => this.handleLike(e, post.id,false)}></a>
                            <p>{post.description} </p>
                        </div>
                    </Card>
                
            })
        
    }

    render() {

        return (
            <>
                <Header userData={this.props.userData} />
                <div className="ham-card">
                    {this.displayData()}
                </div>
            </>
        )

    }

}