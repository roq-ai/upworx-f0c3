import * as yup from 'yup';

export const jobOfferValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  salary: yup.number().integer().nullable(),
  location: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
