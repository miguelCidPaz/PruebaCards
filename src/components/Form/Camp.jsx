import { Component } from 'react';
import Slot from './Slot'

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

export default Camp