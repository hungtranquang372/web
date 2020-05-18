import React, { Component } from 'react'
import items from './data';
const HinhContext = React.createContext();
class HinhProvider extends Component {
    state = {
        ptu: []
    }
    componentDidMount = () => {
        let ptu = [...items]
        this.setState({
            ptu: ptu
        })
    }
    getPicture(id) {
        
        const pictures = items.find(item => item.id === id)
        return pictures;
    }
    render() {
        return (
            // chinh heigh 100%
            <div className="container h-100">
                <HinhContext.Provider value={{...this.state,getPicture:this.getPicture}}>
                    {this.props.children}
                </HinhContext.Provider>
            </div>
        )
    }
}
export { HinhContext, HinhProvider };