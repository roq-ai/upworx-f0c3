import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { jobApplicationValidationSchema } from 'validationSchema/job-applications';
import { JobOfferInterface } from 'interfaces/job-offer';
import { UserInterface } from 'interfaces/user';
import { JobApplicationInterface } from 'interfaces/job-application';

function JobApplicationCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: JobApplicationInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.job_application.create({ data: values as RoqTypes.job_application });
      resetForm();
      router.push('/job-applications');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<JobApplicationInterface>({
    initialValues: {
      cover_letter: '',
      resume: '',
      status: '',
      job_offer_id: (router.query.job_offer_id as string) ?? null,
      freelancer_id: (router.query.freelancer_id as string) ?? null,
    },
    validationSchema: jobApplicationValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Job Applications',
              link: '/job-applications',
            },
            {
              label: 'Create Job Application',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Job Application
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.cover_letter}
            label={'Cover Letter'}
            props={{
              name: 'cover_letter',
              placeholder: 'Cover Letter',
              value: formik.values?.cover_letter,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.resume}
            label={'Resume'}
            props={{
              name: 'resume',
              placeholder: 'Resume',
              value: formik.values?.resume,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.status}
            label={'Status'}
            props={{
              name: 'status',
              placeholder: 'Status',
              value: formik.values?.status,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<JobOfferInterface>
            formik={formik}
            name={'job_offer_id'}
            label={'Select Job Offer'}
            placeholder={'Select Job Offer'}
            fetcher={() => roqClient.job_offer.findManyWithCount({})}
            labelField={'title'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'freelancer_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/job-applications')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'job_application',
    operation: AccessOperationEnum.CREATE,
  }),
)(JobApplicationCreatePage);
