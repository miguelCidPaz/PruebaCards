import { Component } from 'react';
import Editable from './Editable'

class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cond: false,
            editableValue: this.props.content[1],
            identity: this.props.identity
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ cond: this.state.cond, editableValue: this.props.content[1], identity: this.props.identity })
        }
    }

    render() {
        let aux = []
        if (this.props.content[1] === false) {
            aux = <p className="file-result file-link">Change your {this.props.content[0]}</p>
        } else if (this.props.content[1].length === 3) {
            this.props.content[1].map((element, index) => {
                return aux.push(<p key={index} className="file-settings">{element}</p>)
            })
        } else {
            aux = this.props.content[1];
        }

        if (aux.length === 3) {
            return (<div className="section-file section-settings">
                <p className="subtitle-section">{this.props.content[0]}</p>
                <div className="column">
                    {aux}
                </div>
            </div>)
        } else {

            if (this.props.content[2] === true) {
                aux = <Editable props={this.state} identity={this.state.identity} setValue={this.props.setValue} />
            }

            return (
                <div className="section-file">
                    <p className="subtitle-section">{this.props.content[0]}</p>
                    {aux}
                </div>
            )
        }

    }
}

export default Slot