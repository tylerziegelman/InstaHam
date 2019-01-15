import React from 'react'
import { Card } from 'antd'
import './HamCard.css'
import Header from './Header'
export default class HamCard extends React.Component {

    constructor() {
        super()
        this.displayData = this.displayData.bind(this)
    }


    displayData(props) {
        return this.props.userData.map((element) => {
            return this.props.postData.map((el) => {
                if (element.id === el.user_id) {
                    
                return <Card title={<div className="header-wrap">
                                        <h4>
                                            {element.username}
                                        </h4>
                                        <h5>{el.created_at}</h5>
                                    </div>
                                    } bordered={true} style={{ width: 400 }}>
                            {/* <div className="card-header">
                                <div className="head-username">{element.username}</div>
                                <div className="head-date">{el.created_at}</div>
                            </div> */}
                        <div className="ham-image">
                            <img src={el.image_url} alt="meaty post" />
                        </div>
                        <div className="card-icons-wrapper">
                            <div className="fork-up"></div>
                            <div className="carrot-down"></div>
                            <p>{el.description} </p>
                        </div>
                       
                        
                        
                        
                    </Card>
                }
            })
        });
    }

    render() {
        console.log(this.props.postData)
        return (
            <>
                <Header />
                <div className="ham-card">
                    {this.displayData()}
                </div>
            </>
        )

    }

}