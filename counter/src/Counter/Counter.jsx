import React from 'react';
import CounterItem from './CounterItem/CounterItem';

class Counter extends React.Component {

    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 }
        ]
    }

    resetHandler = () =>
        this.setState({ counters: [...this.state.counters].map(c => { c.value = 0; return c; }) });

    incrementCounterHandler = (id) =>
        this.setState({ counters: [...this.state.counters].map(c => { c.value = (c.id === id) ? c.value + 1 : c.value; return c; }) });

    decrementCounterHandler = (id) =>
        this.setState({ counters: [...this.state.counters].map(c => { c.value = (c.id === id) ? c.value - 1 : c.value; return c; }) });

    deleteCounterHandler = (id) =>
        this.setState({ counters: [...this.state.counters].filter(c => c.id !== id) });

    render() {
        return (
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <input type="button" className="btn btn-primary" value="Reset" onClick={this.resetHandler} />
                    </div>
                    {
                        this.state.counters.map(c =>
                            <CounterItem
                                key={c.id}
                                counter={c}
                                onIncrement={this.incrementCounterHandler}
                                onDecrement={this.decrementCounterHandler}
                                onDelete={this.deleteCounterHandler}
                            />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Counter;
