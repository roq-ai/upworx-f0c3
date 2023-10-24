import { JobApplicationInterface } from 'interfaces/job-application';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  start_date: any;
  end_date?: any;
  job_application_id: string;
  created_at?: any;
  updated_at?: any;

  job_application?: JobApplicationInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_application_id?: string;
}
