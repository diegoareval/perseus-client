import { useContext } from "react";
import { TeamMemberContext } from "../providers/TeamMemberContext";

/**
 * Hook to use the TeamMemberContext.
 * @returns The context value.
 * @throws Will throw an error if used outside of TeamMemberProvider.
 */
 export const useTeamMemberContext = () => {
    const context = useContext(TeamMemberContext);
    if (!context) {
        throw new Error('useTeamMemberContext must be used within a TeamMemberProvider');
    }
    return context;
};
