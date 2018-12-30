import React from 'react';
import { createStore, applyMiddleware, compose/*, combineReducers*/ } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';

const reduxComponent = (Component, ReduxxObj) => {
    return class extends React.Component {
        store = ReduxxObj.createStore();

        render() {
            return (
                <Provider store={this.store}>
                    <Parent
                        mapStateToProps={ReduxxObj.mapStateToProps}
                        mapDispatchToProps={ReduxxObj.mapDispatchToProps}
                    >
                        <Component />
                    </Parent>
                </Provider>
            );
        }
    }
}


const Parent = (props) => {
    const ZZ = connect(props.mapStateToProps, props.mapDispatchToProps)(class extends React.Component {
        render() {
            return (
                <Wrapper>
                    {React.cloneElement(props.children, { ...this.props })}
                </Wrapper>
            );
        }
    })

    return <ZZ />;
}



class Reduxx {
    constructor(reducer = null, thunkMiddleware = false, middlewares = [], mapStateToProps = null, mapDispatchToProps = null) {
        this.reducer = reducer;
        this.thunkMiddleware = thunkMiddleware;
        this.middlewares = middlewares;
        this.mapStateToProps = mapStateToProps;
        this.mapDispatchToProps = mapDispatchToProps;
    }

    createStore = () => {
        if (this.thunkMiddleware) {
            const thunk = require('redux-thunk');
            this.middlewares = this.middlewares.concat(thunk.default);
        }

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        if (this.reducer)
            return createStore(
                this.reducer,
                composeEnhancers(
                    applyMiddleware(...this.middlewares)
                )
            );
        else
            return null;
    }
}


export default reduxComponent;
export { Reduxx }