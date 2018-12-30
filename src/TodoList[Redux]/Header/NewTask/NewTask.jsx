import React from 'react';

const newTask = (props) => {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.onTaskAdd(event.target.elements.task.value);
                event.target.elements.task.value = '';
            }}
        >
            <div className="form-row">
                <div className="form-group col-md-9" style={{ padding: '0px', margin: '0px' }}>
                    <input type="text" name="task" className="form-control" placeholder="Task..." required />
                </div>
                <div className="form-group col-md-3">
                    <input type="submit" className="form-control btn" value="Add" />
                </div>
            </div>
        </form>
    );
}

export default newTask;