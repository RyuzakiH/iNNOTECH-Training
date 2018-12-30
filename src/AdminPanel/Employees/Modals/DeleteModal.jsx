import React from 'react';
import CustomModal from '../UI/CustomModal/CustomModal';

const deleteModal = (props) => {
    return (
        <CustomModal
            buttonText="Delete"
            buttonClassName="btn-xs btn-danger"
            buttonStyle={{ float: 'left', margin: '1px' }}
            size="small"
            header=""
            footer={<input type="button" className="btn btn-danger" value="Delete" onClick={props.onSubmit} />}
        >
            <h4>Are you sure?</h4>
        </CustomModal>
    );
};

export default deleteModal;