import * as yup from 'yup';
export const validations = {
  email: yup.string().email('validEmail').required('requiredEmail'),
  currentPassword: yup.string()?.when('isTypeReset', {
    is: false,
    then: yup.string().required('requiredCurrentPassword')
  }),
  userName: yup.string().required('validUserName'),
  newPassword: yup.string().min(6, 'minPasswordLength').required('requiredNewPassword'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'passwordsMustMatch')
    .required('requiredConfirmPassword'),
  required: yup.string().required('requiredField'),
  otp: yup.string().length(6, 'validOtp').optional()
};
