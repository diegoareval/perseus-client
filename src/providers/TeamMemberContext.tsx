import { createContext, useState } from 'react';
import { IMember } from '../interfaces/member.interface';
import { teamFacade } from '../services/team-member.service';

/**
 * Represents the value provided by the TeamMemberContext.
 */
interface TeamMemberContextValue {
    /**
     * An array of member data.
     */
    users: IMember[];

    /**
     * Loads user data based on the given property and status.
     * @param property - The property to sort and filter by.
     * @param status - The status of the members.
     */
    loadData: (property?: keyof IMember | null, status?: boolean) => void;

    /**
     * Adds a new member to the list and updates user data.
     * @param member - The member object to be added.
     */
    addNewMember: (member: IMember) => void;
}

/**
 * Context for managing team member data.
 */
export const TeamMemberContext = createContext<TeamMemberContextValue | undefined>(undefined);


/**
 * Props for the TeamMemberProvider component.
 */
interface TeamMemberProviderProps {
    /**
     * The children components.
     */
    children: React.ReactNode;
}

/**
 * Provides context for managing team member data.
 * @param children - The children components.
 */
export const TeamMemberProvider: React.FC<TeamMemberProviderProps> = ({ children }: TeamMemberProviderProps) => {
    const [users, setUsers] = useState<IMember[]>(teamFacade.sortAndDisplayByProperty());

    /**
     * Loads user data based on the given property and status.
     * @param property - The property to sort and filter by.
     * @param status - The status of the members.
     */
    const loadData = (property?: keyof IMember | null, status = true) => {
        const userData: IMember[] = teamFacade.sortAndDisplayByProperty(property, status);
        setUsers(userData);
    };

    /**
     * Adds a new member to the list and updates user data.
     * @param member - The member object to be added.
     */
    const addNewMember = (member: IMember) => {
        teamFacade.addMember(member);
        const userData: IMember[] = teamFacade.sortAndDisplayByProperty();
        setUsers(userData);
    }

    const value: TeamMemberContextValue = {
        users,
        loadData,
        addNewMember
    };

    return (
        <TeamMemberContext.Provider value={value}>
            {children}
        </TeamMemberContext.Provider>
    );
};
