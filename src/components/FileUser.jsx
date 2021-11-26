import React, { Component } from 'react';
import Editable from './Editable'
import '../CSS/style.css'

class FileUser extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.personalData }
        this.setData = this.setData.bind(this)
        this.changeView = this.changeView.bind(this)
    }

    changeView() {
        this.props.changeView(!this.props.focus)
    }

    setData(value, identity) {
        const newPresentation = this.state

        switch (identity) {
            case 'name':
                newPresentation.name = value
                break;
            case 'link':
                newPresentation.link = value
                break;
            case 'userName':
                newPresentation.userName = value
                break;
            default:
                return this.state
        }

        this.setState({ newPresentation })
        this.props.setValue(newPresentation);
    }

    render() {
        const information = {
            BasicInformation: {
                title: 'Basic Information',
                element: {
                    name: ['Full Name', this.state.name, true],
                    link: ['Email Address', this.state.link, true],
                    userName: ['Student ID', this.state.userName, true],
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
            <>

                <div className="presentation-picture-user">
                    <div className="picture-frame-file" onClick={this.changeView}>
                        <img src={this.state.photo} alt="" />
                    </div>
                    <p className="name-presentation">{this.props.personalData.name}</p>
                    <p className="username-presentation">{this.props.personalData.userName}</p>
                </div>
                <div className="row">
                    <div className="column">
                        <Camp setValue={this.setData} content={information.BasicInformation} />
                        <Camp setValue={this.setData} content={information.AdditionalInformation} />

                    </div>
                    <div className="separator"></div>
                    <Camp setValue={this.setData} content={information.SystemSettings} />
                </div>
            </>
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