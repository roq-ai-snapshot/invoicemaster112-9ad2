import { UserInterface } from 'interfaces/user';
import { OrganisationInterface } from 'interfaces/organisation';

export interface OrganisationMemberInterface {
  id?: string;
  user_id: string;
  organisation_id: string;

  user?: UserInterface;
  organisation?: OrganisationInterface;
  _count?: {};
}
