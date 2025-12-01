import {useReducer} from "react";
import validator from "../validator/validator";

const checkValidityForm = (formState, inputIdentifier, isValid) => {
    let isFormValid = true;

    for (const inputName in formState.inputs) {
        if (inputName === inputIdentifier) {
            isFormValid = isFormValid && isValid
        } else {
            isFormValid = isFormValid && formState.inputs[inputName].isValid
        }
    }
    return isFormValid
}

const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputIdentifier]: {
                        ...state.inputs[action.inputIdentifier],
                        value: action.value,
                        isValid: action.isValid
                    },
                },
                errors: {...state.errors, [action.inputIdentifier]: action.error}
            }
        }

        case "BLUR": {
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputIdentifier]: {
                        ...state.inputs[action.inputIdentifier],
                        isValid: action.isValid,
                        touched: true
                    }
                },
                formIsValid: action.isFormValid,
                errors: {...state.errors, [action.inputIdentifier]: action.error}
            }
        }

        default : {
            return state
        }
    }
}

function useForm(initialData, formIsValid) {
    const [formState, dispatch] = useReducer(formReducer,
        {
            inputs: initialData,
            formIsValid,
            errors: {}
        }
    )

    const inputChangeHandler = (event, inputIdentifier) => {
        let value = event.target.value
        let validationRules = formState.inputs[inputIdentifier].validations;

        let validationResult = validator(value, validationRules, inputIdentifier);

        dispatch({
            type: 'CHANGE',
            value,
            inputIdentifier,
            error: validationResult.error,
            isValid: validationResult.isValid
        })
    }

    const inputBlurHandler = (event, inputIdentifier) => {
        let value = event.target.value

        let validationRules = formState.inputs[inputIdentifier].validations;
        let validationResult = validator(value, validationRules, inputIdentifier);
        let isFormValid = checkValidityForm(formState, inputIdentifier, validationResult.isValid);

        dispatch({
            type: 'BLUR',
            inputIdentifier,
            error: validationResult.error,
            isValid: validationResult.isValid,
            isFormValid: isFormValid
        })
    }
    const validateAllInputs = () => {
        let input;
        let validationResult;
        let isFormValid=true;

        for (let inputName in formState.inputs) {
            input = formState.inputs[inputName];
            validationResult = validator(input.value, input.validations, inputName);
            isFormValid = isFormValid && checkValidityForm(formState, inputName, validationResult.isValid);

            dispatch({
                type: 'BLUR',
                inputIdentifier:inputName,
                error: validationResult.error,
                isValid: validationResult.isValid,
                isFormValid: isFormValid
            })
        }
        return isFormValid;
    }

    const errors = formState.errors;
    return {formState, inputChangeHandler, inputBlurHandler, validateAllInputs, errors}
}

export default useForm;