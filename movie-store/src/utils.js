let capitalize = (text) => text.toLowerCase().replace(/^\w/, c => c.toUpperCase());

let isObject = (obj) => obj !== null && typeof obj === 'object' && obj.constructor === Object;

let isDefined = (value) => typeof value !== 'undefined' && value !== null;

let isFunction = (obj) => obj && (typeof obj === 'function');

let executeAfterDelay = (fn, ms) => setTimeout(() => fn(), ms);


let parseForm = (form, formElements) => {
    return formElements.reduce(function (map, obj) {
        if (obj.type === 'number')
            map[obj.name] = Number(form.elements[obj.name].value);
        else
            map[obj.name] = form.elements[obj.name].value;

        return map;
    }, {});
}

let filterObjectByKeys = (originalObj, removedKeys) => {
    return Object.keys(originalObj)
        .filter(k => !removedKeys.includes(k))
        .reduce((obj, key) => {
            obj[key] = originalObj[key];
            return obj;
        }, {});
}

// Needs Testing
let isReactElement = (element) => typeof element.type !== "string"

let makeEnum = (arr) => {
    return Object.freeze(arr.reduce((map, val) => {
        map[val.toUpperCase()] = val;
        return map;
    }, {}));
}

export default {
    isFunction,
    isObject,
    isDefined,
    capitalize,
    executeAfterDelay,
    parseForm,
    filterObjectByKeys,
    isReactElement,
    makeEnum
};