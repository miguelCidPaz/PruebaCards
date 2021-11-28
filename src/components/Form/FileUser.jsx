import React, { Component } from 'react';
import Camp from './Camp'
import '../../res/CSS/style.css';


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

export default FileUser;