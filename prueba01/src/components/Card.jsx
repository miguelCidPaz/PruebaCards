import React, { Component } from "react";
import '../CSS/style.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content };
    }
    render() {
        return (
            <div className="body-card">
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

export default Card;