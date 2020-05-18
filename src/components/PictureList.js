import React, { Component } from 'react'
import { HinhContext } from '../context'
import Picture from '../components/Picture/Picture'
export default class PictureList extends Component {
    static contextType = HinhContext
    render() {
        let { ptu } = this.context;
        let pictures = ptu.map((item, index) => 
             <div className="col-4" ><Picture data={item} key={index} /></div>
        )
        return (
            <div className="picture-list-container">
                <div className="row">
                    {pictures}
                </div>

            </div>
        )
    }
}
