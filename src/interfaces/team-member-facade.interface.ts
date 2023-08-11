import { IMember } from './member.interface';

export interface ITeamMemberFacade {
  showActiveRecords(): IMember[];
  sortAndDisplayByProperty(property: keyof IMember): IMember[];
  addMember(member: IMember): void;
}
