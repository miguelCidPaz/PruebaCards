import React, { Component } from 'react';

class FileUser extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.personalData, ...this.props.extraData }
    }
    render() {
        return (
            <div className="body-file-user">

                <div className="presentation-picture-user">
                    <div className="picture-frame-file">
                        <img src={this.state.photo} alt="" />
                    </div>
                    <p className="name-presentation">{this.state.name}</p>
                    <p className="username-presentation">{this.state.userName}</p>
                </div>


                <p className="title-section-file-user">Basic information</p>
                <section className="section-file-user">
                    <div className="section-file">
                        <p className="subtitle-section">Full Name</p>
                        <p className="file-result">{this.state.name}</p>
                    </div>
                    <div className="section-file">
                        <p className="subtitle-section">Email Address</p>
                        <p className="file-result">{this.state.name}</p>
                    </div>
                    <div className="section-file">
                        <p className="subtitle-section">Student ID</p>
                        <p className="file-result">{this.props.link.userID}</p>
                    </div>
                    <div className="section-file">
                        <p className="subtitle-section">Password</p>
                        <p className="file-result">Nombre de turno</p>
                    </div>
                </section>

                <p className="title-section-file-user">Additional information</p>
                <section className="section-file-user">
                    <div className="section-file">
                        <p className="subtitle-section">Gender</p>
                        <p className="file-result">Monigote azul</p>
                    </div>
                </section>

                <p className="title-section-file-user">System Settings</p>
                <section className="section-file-user">
                    <div className="section-file">
                        <p className="subtitle-section">Language</p>
                        <p className="file-result">Lenguaje de turno texto especialmente largo</p>
                    </div>
                    <div className="section-file">
                        <p className="subtitle-section">Privacy Settings</p>
                        <p className="file-result">Privacidad de turno texto especialmente largo</p>
                    </div>
                    <div className="section-file">
                        <p className="subtitle-section">Global Notification Settings</p>
                        <p className="file-result">Notificaciones de turno especialmente largas</p>
                    </div>
                </section>
            </div>
        )
    }
}

FileUser.defaultProps = {
    links: {
        studentID: "Add student ID",
        password: "Change password",
        notification: "Link de turno"
    }
}

export default FileUser;