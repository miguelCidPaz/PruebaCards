import React, { Component } from "react";
import '../CSS/style.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: this.props.focus
        }
        this.changeView = this.changeView.bind(this)
    }

    changeView() {
        this.setState(() => ({
            focus: !this.props.focus
        }))
        this.props.changeView(!this.props.focus)
    }

    render() {
        return (
            <div className="body-card" onClick={this.changeView}>
                <HeadCard content={this.props.presentation} />
                <BodyCard content={this.props.dates} />
            </div>
        )
    }
}

class HeadCard extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content };
    }
    render() {
        return (
            <div className="body-head-card">
                <div className="frame-picture">
                    <img src={this.state.photo} alt="#" />
                </div>
                <p className="text-card text-card-name">{this.state.name}</p>
                <p className="text-card text-card-number">{this.state.number}</p>
                <p className="text-card text-card-link">{this.state.link}</p>
            </div>
        )
    }
}

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

export default Card;