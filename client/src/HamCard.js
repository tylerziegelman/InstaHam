import React from 'react'
import { Card } from 'antd'
import './HamCard.css'
import { withRouter } from "react-router";
import Header from './Header'
import axios from 'axios'
let host;
if (process.env.NODE_ENV === 'production') {
  host = 'https://instaham-api.herokuapp.com'
}else {host = 'http://localhost:3000'}

class HamCard extends React.Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }
        this.displayData = this.displayData.bind(this)
        
    }

    componentDidMount() {
        axios.get(`${host}/home`,{
            headers: {
                Authorization: localStorage.getItem('instaham-jwt')
            }
  
  
        }).then((obj) => {
          
          this.setState({
            posts: obj.data.post_data
            
            
          })
        //  return(obj.data.post_data.map((post)=>{
        //   let counter = 0;
        //   return(post.likes.forEach((like)=>{
        //     if (like.type === 0) {
        //       counter++
        //       console.log(`post ${like.post_id} has ${counter} dislikes`)
        //     }else if(like.type===1) {console.log(`post ${like.post_id} has ${counter} likes`)}
        //   }))
          
        //  }))
        }).catch((error) => {
          this.props.history.push('/login')
        })
      }


    displayData(props) {
            return this.state.posts.map((post) => {
               
                const likesNum =  post.likes && post.likes.filter((like)=>{
                    return like.type===1                    
                
                }).length

                const dislikesNum = post.likes &&  post.likes.filter((like)=>{
                    return like.type===0                    
                
                }).length
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
                            <a className="fork-up" onClick={(e) => this.props.handleLike(e, post.id,true)}></a>
                            <span>{likesNum}</span>
                            <a className="carrot-down" onClick={(e) => this.props.handleLike(e, post.id,false)}></a>
                            <span>{dislikesNum}</span>
                            <p>{post.description} </p>
                        </div>
                    </Card>
                
            })
        
    }

    render() {
        // console.log(this.props.submitPost.toString())
        return (
            <>
                <Header submitPost={this.props.submitPost} postData={this.state.posts} />
                <div className="ham-card">
                    {this.displayData()}
                </div>
            </>
        )

    }

}

export default withRouter(HamCard);