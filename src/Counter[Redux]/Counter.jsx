import React from 'react';
import CounterItem from './CounterItem/CounterItem';
import reduxComponent, { Reduxx } from '../reduxUtils';
import reducer from './Store/reducer';
import * as actions from './Store/actions';

const counter = (props) => {
    return (
        <div className="counter">
            <div className="container">
                <div className="row">
                    <input type="button" className="btn btn-primary" value="Reset" onClick={props.onResetCounters} />
                </div>
                {
                    props.counters.map(c =>
                        <CounterItem
                            key={c.id}
                            counter={c}
                            onIncrement={props.onCounterIncrement}
                            onDecrement={props.onCounterDecrement}
                            onDelete={props.onCounterDelete}
                        />
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        counters: state.counters,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onResetCounters: () => dispatch(actions.resetCounters()),
        onCounterIncrement: (counterId) => dispatch(actions.incrementCounter(counterId)),
        onCounterDecrement: (counterId) => dispatch(actions.decrementCounter(counterId)),
        onCounterDelete: (counterId) => dispatch(actions.deleteCounter(counterId))
    };
}

export default reduxComponent(counter, new Reduxx(reducer, false, [], mapStateToProps, mapDispatchToProps));