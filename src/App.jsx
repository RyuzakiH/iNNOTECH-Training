import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoList from './TodoList/TodoList.jsx';
import AdminPanel from './AdminPanel/AdminPanel';
import AdminPanelRedux from './AdminPanel[Redux]/AdminPanel';
import MovieStore from './MovieStore/MovieStore';
import Counter from './Counter/Counter';
import TodoListRedux from './TodoList[Redux]/TodoList.jsx';
import MovieStoreRedux from './MovieStore[Redux]/MovieStore';
import CounterRedux from './Counter[Redux]/Counter';
import Wrapper from './Wrapper';
import PersistentDrawer from './PersistentDrawer';

class App extends React.Component {
    render() {
        return (
            <Wrapper>

                <PersistentDrawer>
                    <Switch>
                        <Route path="/admin-panel" component={AdminPanel} />
                        <Route path="/admin-panel-redux" component={AdminPanelRedux} />
                        <Route path="/movie-store" component={MovieStore} />
                        <Route path="/movie-store-redux" component={MovieStoreRedux} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/counter-redux" component={CounterRedux} />
                        <Route path="/todo-list" component={TodoList} />
                        <Route path="/todo-list-redux" component={TodoListRedux} />
                        {/* <Route path="/" exact component={} /> */}
                    </Switch>
                </PersistentDrawer>


            </Wrapper>
        );
    }
}

export default App;
