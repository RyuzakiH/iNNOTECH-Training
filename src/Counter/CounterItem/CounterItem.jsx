import React from 'react';

const counterItem = (props) => {

    const numberStyle = { display: 'inline', backgroundColor: 'lightblue', borderRadius: '4px', padding: '5px', paddingLeft: '8px', marginRight: '40px', marginLeft: '20px', marginTop: '10px' };
    const zeroStyle = { display: 'inline', backgroundColor: 'yellow', borderRadius: '4px', padding: '5px', paddingLeft: '8px', marginRight: '30px', marginLeft: '6px', marginTop: '10px' };

    return (
        <div className="row">
            {
                props.counter.value === 0 ?
                    <p style={zeroStyle}> Zero </p>
                    :
                    <p style={numberStyle}> {props.counter.value} </p>
            }

            <input type="button" className="btn" value="+" style={{ margin: '5px' }} onClick={() => props.onIncrement(props.counter.id)} />
            <input type="button" className="btn" value="-" style={{ margin: '5px' }} onClick={() => props.onDecrement(props.counter.id)} disabled={props.counter.value === 0} />
            <input type="button" className="btn btn-danger" value="Delete" style={{ margin: '5px' }} onClick={() => { props.onDelete(props.counter.id) }} />
        </div>
    );
}

export default counterItem;
