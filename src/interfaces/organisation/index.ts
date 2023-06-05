import { ContractInterface } from 'interfaces/contract';
import { FinancialReportInterface } from 'interfaces/financial-report';
import { InvoiceInterface } from 'interfaces/invoice';
import { OrganisationMemberInterface } from 'interfaces/organisation-member';
import { UserInterface } from 'interfaces/user';

export interface OrganisationInterface {
  id?: string;
  name: string;
  owner_id: string;
  contract?: ContractInterface[];
  financial_report?: FinancialReportInterface[];
  invoice?: InvoiceInterface[];
  organisation_member?: OrganisationMemberInterface[];
  user?: UserInterface;
  _count?: {
    contract?: number;
    financial_report?: number;
    invoice?: number;
    organisation_member?: number;
  };
}
