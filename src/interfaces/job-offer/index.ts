import { JobApplicationInterface } from 'interfaces/job-application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobOfferInterface {
  id?: string;
  title: string;
  description: string;
  salary?: number;
  location?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  job_application?: JobApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    job_application?: number;
  };
}

export interface JobOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  company_id?: string;
}
