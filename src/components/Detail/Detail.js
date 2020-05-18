import React, { Component } from 'react'
import { HinhContext } from '../../context'
import './detail.css'
export default class Detail extends Component {
    constructor(props) {
        super(props);
        console.log(props);


    }

    static contextType = HinhContext;
    render() {
        let { getPicture } = this.context;
        let Image = getPicture(this.props.match.params.id);
        let anh = Image.pictures.map((item, index) => {
            if (index !== 0) {
                return <div className="grid-item">
                    <img className="image" data-toggle="modal" data-target={`#${item.url}`} src={item.url} />
            <h3>{item.title}</h3>



                    <div class="modal fade" id={item.url} tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content"> 
                            {/* modal co kich thuoc mac dinh */}
                                <div class="modal-body">
                                    <img className="image-modal" src={item.url} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        })

        return (
            <div>
                <div className="title">
                    {Image.title}
                </div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={Image.pictures[0].url} alt="Second slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="grid-container">
                    {anh}
                </div>

            </div>
        )

    }
}
