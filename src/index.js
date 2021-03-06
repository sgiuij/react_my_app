import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class AddCalenderEvent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newCalenderEvent: '',
            newCalenderDate: ''
        }

        this.updatenewCalenderEvent = this.updatenewCalenderEvent.bind(this)
        this.updatenewCalenderDate = this.updatenewCalenderDate.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }

    updatenewCalenderEvent(e) {
        console.log(e);
        this.setState({
            newCalenderEvent: e.target.value
        })
    }

    updatenewCalenderDate(e) {
        this.setState({
            newCalenderDate: e.target.value
        })
    }

    handleAddNew() {
        console.log("d")
        this.props.addNew(this.state.newCalenderEvent, this.state.newCalenderDate)
        this.setState({
            newCalenderDate: '',
            newCalenderEvent: ''
        })
    }

    render() {
        return (
            <div>
                <input
                    id="calenderDate"
                    type="date"
                    onChange={this.updatenewCalenderDate}
                />
                <input
                    type="text"
                    value={this.state.newCalenderEvent}
                    onChange={this.updatenewCalenderEvent}
                />
                <button onClick={this.handleAddNew}> Add Event to Calender</button>
            </div>
        )
    }
}


class ShowList extends React.Component {
    render() {
        return (
            <div>
                <h3> Calender </h3>
                <ul>
                    {this.props.names.map((calenderEvent) => {
                        return <li> {calenderEvent} </li>
                    })}
                </ul>
            </div>
        )
    }
}

class CalenderEventContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'placeholder',
            calenderEvents: [
                'Jake Lingwall',
                'Sarah Drasner',
                'Merrick Christensen'
            ],
        }

        this.AddCalenderEvent = this.AddCalenderEvent.bind(this)
    }

    AddCalenderEvent(calenderEvent) {
        this.setState((state) => ({
            calenderEvents: state.calenderEvents.concat([calenderEvent]),
        }))
    }

    render() {
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddCalenderEvent addNew={this.AddCalenderEvent, this.AddCalenderDate}/>
                <ShowList names={this.state.calenderEvents}/>
            </div>
        )
    }
}

ReactDOM.render(<CalenderEventContainer/>, document.getElementById('root'));
