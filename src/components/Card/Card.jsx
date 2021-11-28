import React, { Component } from "react";
import HeadCard from './HeadCard'
import BodyCard from './BodyCard'
import '../../res/CSS/style.css';

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

export default Card;