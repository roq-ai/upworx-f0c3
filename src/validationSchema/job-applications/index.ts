import * as yup from 'yup';

export const jobApplicationValidationSchema = yup.object().shape({
  cover_letter: yup.string().required(),
  resume: yup.string().required(),
  status: yup.string().required(),
  job_offer_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
