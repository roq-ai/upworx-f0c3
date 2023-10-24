import { ContractInterface } from 'interfaces/contract';
import { JobOfferInterface } from 'interfaces/job-offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobApplicationInterface {
  id?: string;
  cover_letter: string;
  resume: string;
  status: string;
  job_offer_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;
  contract?: ContractInterface[];
  job_offer?: JobOfferInterface;
  user?: UserInterface;
  _count?: {
    contract?: number;
  };
}

export interface JobApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  cover_letter?: string;
  resume?: string;
  status?: string;
  job_offer_id?: string;
  freelancer_id?: string;
}
