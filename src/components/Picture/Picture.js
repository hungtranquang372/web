import React, { Component } from 'react'
import './picture.css'
import {Link} from 'react-router-dom'
export default class Picture extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
    }
    
    render() {
    let {data}=this.props;
        return (
            <div className="img-container">
                <img  className="img-thumbnail" src={this.props.data.pictures[0].url} alt="hinh-mau-1"/>
                <Link  className="link"  to={`/detail/${this.props.data.id}`}>Xem anh</Link>
            </div>
        )
    }
}
