import styled from './styled.module.scss';

interface ShowMembersOfTeamsProps {
    children: React.ReactNode; 
}

export const ShowMembersOfTeamsRoot = ({ children }: ShowMembersOfTeamsProps) => {
    return (
        <section className={styled["showMembersOfTeams"]}>
            <div className={styled["title"]}>
                <h2>Participantes</h2>
            </div>
            <div className={styled["membersTeam"]}>
                {
                    children
                }
            </div>
        </section>
    );
} 