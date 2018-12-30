import React from 'react';
import FormModal from '../UI/FormModal/FormModal';

const addFormModal = (props) => {
    return (
        <FormModal
            modalButtonText="Add Employee"
            modalButtonClassName="btn-primary"
            modalButtonStyle={props.style}
            modalHeader="Add Employee"
            formId="formEmployee"
            submitButtonClassName="btn btn-success"
            submitButtonText="Add"
            onSubmit={props.onSubmit}
            formElements={props.employeesTemplate}
        />
    );
};

export default addFormModal;