import React from 'react';
import FormModal from '../UI/FormModal/FormModal';

const editFormModal = (props) => {

    const tempTemplate = [...props.employeesTemplate];
    const element = [...tempTemplate[0]];

    // Editing it using any other way causes editing the one passed to addFormModal
    tempTemplate[0] = { name: 'id', type: element.type, readOnly: true, required: element.required };


    return (
        <FormModal
            modalButtonText="&nbsp;Edit&nbsp;"
            modalButtonClassName="btn-xs btn-info"
            modalButtonStyle={{ float: 'left', margin: '1px', marginLeft: '10px' }}
            modalHeader="Edit Employee"
            modalStyle={{ float: 'left' }}
            formId="formEmployee"
            submitButtonClassName="btn btn-success"
            submitButtonText="Save"
            onSubmit={props.onSubmit}
            formElements={tempTemplate}
            data={props.employee}
        />
    );
};

export default editFormModal;
