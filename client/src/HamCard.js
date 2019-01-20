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

    handleLike (e,postId)  {
        e.preventDefault()
        axios.post('/like', {
        
            post_id: postId
            
        },{
            headers: {
              Authorization: localStorage.getItem('instaham-jwt')
            }


    })
    }
    // axios.post('/post', {
    //     user_id: this.props.userData.user_id,
    //     image_url: this.state.image_url,
    //     description: this.state.description
    //   },{
    //     headers: {
    //       Authorization: localStorage.getItem('instaham-jwt')
    //     }
    //   })
      


    displayData(props) {
        return this.props.userData.map((element) => {
            return this.props.postData.map((el) => {
                if (element.id === el.user_id) {
                    
                return <Card title={<div className="header-wrap" key={el.id}>
                                        <h4>
                                            {element.username}
                                        </h4>
                                        <h5>
                                            {el.created_at}
                                        </h5>
                                    </div>
                                    } bordered={true} style={{ width: 400 }}>
                        <div className="ham-image">
                            <img src={el.image_url} alt="meaty post" />
                        </div>
                        <div className="card-icons-wrapper">
                            <a className="fork-up" onClick={(e)=>this.handleLike(e,el.id)}></a>
                            <a className="carrot-down"></a>
                            <p>{el.description} </p>
                        </div>
                </Card>
                }
            })
        });
    }

    render() {
       
        return (
            <>
                <Header userData={this.props.userData}/>
                <div className="ham-card">
                    {this.displayData()}
                </div>
            </>
        )

    }

}