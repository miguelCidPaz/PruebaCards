import editable from '../res/edit.png'
import React, { Component } from 'react'

class Editable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.props.editableValue,
            cond: this.props.props.cond
        }
        this.isEdit = this.isEdit.bind(this)
        this.inEdit = this.inEdit.bind(this)
        this.myRef = React.createRef();

    }

    isEdit() {
        this.state.cond ? this.setState(() => ({
            cond: false
        })) : this.setState(() => ({
            cond: true
        }))
    }

    inEdit(e) {
        const user = e.target.value
        this.setState(() => ({
            value: user
        }))
        this.props.setValue(user, this.props.identity)
    }

    render() {
        return (
            <div className='extra-content-file-user'>
                {this.state.cond ? <input type="text" onChange={this.inEdit} ref={this.myRef} value={this.state.value} /> : <p>{this.state.value}</p>}
                <button className='icon' onClick={this.isEdit} >
                    <img src={editable} alt="#" />
                </button>
            </div>
        )
    }
}

export default Editable