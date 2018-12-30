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
            {
                props.submitButton ?
                    <input
                        type="submit"
                        className={props.submitButtonClassName}
                        value={props.submitButtonText} />
                    : null
            }
        </form>
    );
}

export default form;

export { InputTypes };



// TODO
class FormElement {

    constructor(type) {

        this.type = type;

        this.config = {
            type: 'text',
            placeholder: '',
            value: ''
        };

        this.required = true;
        this.valid = false;
    }
}


const FormElements = Object.freeze({
    INPUT: "input",
    TEXTAREA: "textarea",
    LABEL: "label",
    FIELDSET: "fieldset",
    LEGEND: "legend",
    SELECT: "select",
    OPTGROUP: "optgroup",
    OPTION: "option",
    BUTTON: "button",
    DATALIST: "datalist",
    OUTPUT: "output"
});



new FormElement(FormElements.INPUT);