import {
  donnyObj,
  mattObj,
  miroslavObj,
  rockyObj,
  diegoObj,
} from '../constants/memberData'
import { ITeamMemberFacade, IMember } from '../interfaces'
import { TeamMember } from './team-member'

/**
 * Represents a facade class used to manage team members and their records.
 * @implements {ITeamMemberFacade}
 */
class TeamMemberFacade implements ITeamMemberFacade {
  /**
   *  It is the singleton instance of TeamMember class.
   * @type {TeamMember}
   * @private
   */
  private teamInstance: TeamMember

  /**
   * Constructs a new instance of TeamMemberFacade.
   */
  constructor() {
    this.teamInstance = TeamMember.getInstance()
    this.addInitialMembers()
    this.updateDates()
  }

  /**
   * Adds initial team members to the instance.
   * @private
   */
  private addInitialMembers() {
    ;[rockyObj, miroslavObj, donnyObj, mattObj, diegoObj].forEach(
      (member: IMember) => {
        this.teamInstance.addMember(member)
      },
    )
  }

  /**
   * Add new member
   * @param {IMember} member - new member to create.
   */
  addMember(member: IMember) {
    this.teamInstance.addMember({
      ...member,
      Date: new Date().toLocaleDateString(),
    })
  }

  /**
   * Add Date attribute to each team members
   * @private
   */
  private updateDates() {
    this.teamInstance.getAllMembers().forEach((member) => {
      member.Date = new Date().toLocaleDateString()
    })
  }

  /**
   * Displays active records of team members.
   * @returns IMember[]
   */
  public showActiveRecords(): IMember[] {
    const activeMembers = this.teamInstance
      .getAllMembers()
      .filter((member) => member.Status === 'Active')
    return activeMembers
  }
  

  /**
   * Sorts and displays team members by a specified property.
   * @param {keyof IMember} property - The property to sort by.
   * @returns IMember[]
   */
  public sortAndDisplayByProperty(property?: keyof IMember | null): IMember[] {
    const allMembers: IMember[] = this.teamInstance.getAllMembers()

    const sortedMembers = [...allMembers].sort((a, b) =>
      this.compareMembersByProperty(a, b, property || "Name"),
    )

    return sortedMembers
  }

  /**
   * Compares two members based on a specified property.
   * @param {IMember} a - The first member.
   * @param {IMember} b - The second member.
   * @param {keyof IMember} property - The property to compare.
   * @returns {number} A comparison value (-1, 0, or 1).
   * @private
   */
  private compareMembersByProperty(
    a: IMember,
    b: IMember,
    property: keyof IMember,
  ): number {
    const aValue = a[property]
    const bValue = b[property]

    if (aValue === bValue) {
      return 0
    }
    if (!aValue) {
      return 1
    }
    if (!bValue) {
      return -1
    }

    return aValue.localeCompare(bValue)
  }
}

// Show all the results
export const teamFacade = new TeamMemberFacade();

// how to use it
// teamFacade.showActiveRecords();
// teamFacade.sortAndDisplayByProperty('Name');
// teamFacade.sortAndDisplayByProperty('FavoriteFood');
// teamFacade.sortAndDisplayByProperty('FavoriteMovie');
// teamFacade.addMember(mattObj);
