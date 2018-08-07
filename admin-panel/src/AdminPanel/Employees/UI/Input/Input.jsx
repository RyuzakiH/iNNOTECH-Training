import React from 'react';
import utils from '../../../../utils'

const input = (props) => {

    const domProps = utils.filterObjectByKeys(props, ['label', 'labelClassName', 'inputClassName']);

    return (
        <div className="form-group">
            <div className="col-sm-1"></div>
            <label className={"control-label " + props.labelClassName}>{props.label}</label>
            <div className={props.inputClassName}>
                <input className="form-control" {...domProps} />
            </div>
        </div>
    );
}

export default input;





const InputTypes = Object.freeze({
    BUTTON: "button",
    CHECKBOX: "checkbox",
    COLOR: "color",
    DATE: "date",
    DATETIME_LOCAL: "datetime-local",
    EMAIL: "email",
    FILE: "file",
    HIDDEN: "hidden",
    IMAGE: "image",
    MONTH: "month",
    NUMBER: "number",
    PASSWORD: "password",
    RADIO: "radio",
    RANGE: "range",
    SEARCH: "search",
    SUBMIT: "submit",
    TEL: "tel",
    TEXT: "text",
    TIME: "time",
    URL: "url",
    WEEK: "week"
});

export { InputTypes };