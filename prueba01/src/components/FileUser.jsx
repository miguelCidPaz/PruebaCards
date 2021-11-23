import React, { Component } from 'react';
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
                    FullName: ['Full Name', this.state.name],
                    EmailAddress: ['Email Address', this.state.link],
                    StudentID: ['Student ID', false],
                    Password: ['Password', false]
                }
            },
            AdditionalInformation: {
                title: 'Additional Information',
                element: {
                    gender: ['gender', false]
                }
            },
            SystemSettings: {
                title: 'System Settings',
                element: {
                    language: ['Languages', 'English (United States)'],
                    privacy: ['Privacy Settings', 'Only administrators and other instructors can view my profile information'],
                    global: ['Global Notification Settings', ['Stream notifications', 'Email notifications', 'Push notifications']]
                }
            }
        }

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
                        <Camp content={information.BasicInformation} />
                        <Camp content={information.AdditionalInformation} />

                    </div>
                    <div className="separator"></div>
                    <Camp content={information.SystemSettings} />
                </div>
            </div>
        )
    }
}

class Camp extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content }
    }
    render() {
        let arr = [];
        for (let [a, b] of Object.entries(this.state.element)) {
            arr.push(<Slot key={a} content={b} />)
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