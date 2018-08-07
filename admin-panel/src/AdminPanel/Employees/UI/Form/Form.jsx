import React from 'react';
import Input, { InputTypes } from '../Input/Input'
import utils from '../../../../utils'

const form = (props) => {

    const domProps = utils.filterObjectByKeys(props, ['data', 'onSubmit', 'formElements', 'callback']);

    return (
        <form
            {...domProps}
            className="form-horizontal"
            onSubmit={(e) => {
                e.preventDefault();

                if (utils.isFunction(props.callback))
                    props.callback();

                var formData = utils.parseForm(e.target, props.formElements);

                if (utils.isFunction(props.onSubmit))
                    props.onSubmit(formData);
            }}
        >
            {
                props.formElements.map(item =>
                    <Input
                        key={item.name}
                        label={utils.capitalize(item.name)}
                        labelClassName="col-sm-2"
                        inputClassName="col-sm-7"
                        type={item.type}
                        name={item.name}
                        defaultValue={(props.data) ? props.data[item.name] : ''}
                        disabled={item.readOnly}
                        required={item.required}
                    />
                )
            }
        </form>
    );
}

export default form;

export { InputTypes };