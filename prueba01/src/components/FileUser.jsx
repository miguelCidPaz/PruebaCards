import React, { Component } from 'react';
import Editable from './Editable'
import '../CSS/style.css'

class FileUser extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.personalData }
    }

    render() {
        const information = {
            BasicInformation: {
                title: 'Basic Information',
                element: {
                    name: ['Full Name', this.state.name, true],
                    link: ['Email Address', this.state.link, true],
                    StudentID: ['Student ID', false, false],
                    Password: ['Password', false, false]
                }
            },
            AdditionalInformation: {
                title: 'Additional Information',
                element: {
                    gender: ['gender', false, false]
                }
            },
            SystemSettings: {
                title: 'System Settings',
                element: {
                    language: ['Languages', this.state.language, false],
                    privacy: ['Privacy Settings', 'Only administrators and other instructors can view my profile information', false],
                    global: ['Global Notification Settings', ['Stream notifications', 'Email notifications', 'Push notifications'], false]
                }
            }
        };

        return (
            <div className="body-file-user">

                <div className="presentation-picture-user">
                    <div className="picture-frame-file">
                        <img src={this.state.photo} alt="" />
                    </div>
                    <p className="name-presentation">{this.state.name}</p>
                    <p className="username-presentation">{this.state.userName}</p>
                </div>
                <div className="row">
                    <div className="column">
                        <Camp setValue={this.props.setValue} content={information.BasicInformation} />
                        <Camp setValue={this.props.setValue} content={information.AdditionalInformation} />

                    </div>
                    <div className="separator"></div>
                    <Camp setValue={this.props.setValue} content={information.SystemSettings} />
                </div>
            </div>
        )
    }
}

class Camp extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content, }
    }

    render() {
        let arr = [];
        for (let [a, b] of Object.entries(this.state.element)) {
            arr.push(<Slot setValue={this.props.setValue} key={a} identity={a} content={b} />)
        }
        return (
            <>
                <div className="column">
                    <p className="title-section-file-user">{this.state.title}</p>
                    <section className="section-file-user">
                        {arr}
                    </section>
                </div>
            </>
        )
    }
}

class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cond: false,
            editableValue: this.props.content[1],
            identity: this.props.identity
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

export default FileUser;