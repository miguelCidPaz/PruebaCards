import React, { Component } from 'react';


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
                        <Camp content={information.SystemSettings} />
                    </div>
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
            arr.push(<Slot content={b} />)
        }
        return (
            <>
                <p className="title-section-file-user">{this.state.title}</p>
                <section className="section-file-user">
                    {arr}
                </section>
            </>
        )
    }
}

class Slot extends Component {
    render() {
        let aux = ''
        if (this.props.content[1] === false) {
            aux = 'link de turno'
        } else if (this.props.content[1].length === 3) {
            aux = 'Esto es un array xulo'
        } else {
            aux = this.props.content[1];
        }
        return (
            <div className="section-file">
                <p className="subtitle-section">{this.props.content[0]}</p>
                <p className="file-result">{aux}</p>
            </div>
        )
    }
}

export default FileUser;