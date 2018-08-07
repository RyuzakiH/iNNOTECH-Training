import React from 'react';
import CustomModal from '../CustomModal/CustomModal';
import Form from '../Form/Form';

const formModal = (props) => {
    return (
        <CustomModal
            buttonText={props.modalButtonText}
            buttonClassName={props.modalButtonClassName}
            buttonStyle={props.modalButtonStyle}
            header={props.modalHeader}
            style={props.modalStyle}
            size={props.modalSize}
            footer={
                <input type="submit" form={props.formId} className={props.submitButtonClassName} value={props.submitButtonText} />
            }
        >
            <Form
                id={props.formId}
                onSubmit={props.onSubmit}
                formElements={props.formElements}
                data={props.data} />
        </CustomModal>
    );
};

export default formModal;