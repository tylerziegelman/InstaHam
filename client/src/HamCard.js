import React from 'react'
import { Card } from 'antd'
import './HamCard.css'
import Header from './Header'
import axios from 'axios'
export default class HamCard extends React.Component {



    constructor() {
        super()
        this.displayData = this.displayData.bind(this)
    }

    handleLike(e, postId,type) {
        e.preventDefault()
        axios.post('/like', {
<<<<<<< HEAD
            post_id: postId
        },{
            headers: {
              Authorization: localStorage.getItem('instaham-jwt')
            }


    })
    }


    handleDisLike (e,postId)  {
        e.preventDefault()
        axios.post('/like', {
        
=======
            type: type,
>>>>>>> 28212ab2f31497e5a165ebc1c824b5645bb235c8
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
<<<<<<< HEAD
                            <a className="fork-up" onClick={(e)=>this.handleLike(e,el.id)}></a>
                            <a className="carrot-down" onClick={(e)=>this.handleDisLike(e,el.id)}></a>
                            <p>{el.description} </p>
=======
                            <a className="fork-up" onClick={(e) => this.handleLike(e, post.id,true)}></a>
                            <a className="carrot-down" onClick={(e) => this.handleLike(e, post.id,false)}></a>
                            <p>{post.description} </p>
>>>>>>> 28212ab2f31497e5a165ebc1c824b5645bb235c8
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