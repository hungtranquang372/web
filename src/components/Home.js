import React, { Component } from 'react'
import Header from '../components/Header'
import PictureList from '../components/PictureList'
export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="header">
                <Header/>
            </div>
            <div className="picturelist">
                <PictureList/>
            </div>
            </div>
        )
    }
}
