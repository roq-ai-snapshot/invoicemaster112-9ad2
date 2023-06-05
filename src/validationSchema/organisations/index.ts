import * as yup from 'yup';
import { contractValidationSchema } from 'validationSchema/contracts';
import { financialReportValidationSchema } from 'validationSchema/financial-reports';
import { invoiceValidationSchema } from 'validationSchema/invoices';
import { organisationMemberValidationSchema } from 'validationSchema/organisation-members';

export const organisationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  contract: yup.array().of(contractValidationSchema),
  financial_report: yup.array().of(financialReportValidationSchema),
  invoice: yup.array().of(invoiceValidationSchema),
  organisation_member: yup.array().of(organisationMemberValidationSchema),
});
