import * as Yup from 'yup'
export const RaceCarFormValidation = Yup.object().shape({
    firstName: Yup.string()
        .required("First Name is required."),
    lastName: Yup.string()
        .required("Last Name is required."),
})