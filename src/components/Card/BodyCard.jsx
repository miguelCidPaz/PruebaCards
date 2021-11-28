import { Component } from 'react'

class BodyCard extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content }
    }
    render() {
        return <div className="body-date-card">
            <div className="date devices">
                <div className="ornament"></div><p className="device-text">Devices Used - {this.state.devices}</p>
            </div>
            <div className="date location">
                <div className="ornament"></div><p className="location-text">Location - {this.state.location}</p>
            </div>
            <div className="date profile">
                <div className="ornament"></div><p className="profile-text">{this.state.profile} - Profile</p>
            </div>

            <p className="total-amount">Total Amount Spent $ {this.state.amount}</p>
        </div>
    }
}

export default BodyCard