import  { useState } from 'react';
import { useTeamMemberContext } from '../../hooks/useTeamMemberContext';
import { IMember } from '../../interfaces';
import { Subheading, Button, Modal, InputContainer, StyledInput, StyledSelect, FormContainer, ButtonContainer } from '../../styles/main';


const initState = {
    Name: '',
    FavoriteFood: '',
    FavoriteMovie: '',
    Status: 'Active',
};

const MemberModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<IMember>(initState);
    const { addNewMember } = useTeamMemberContext();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prevFormData: IMember) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addNewMember(formData);
        setFormData(initState);
        closeModal();
    };

    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isModalOpen}>
                <Subheading>Create New Member</Subheading>
                <FormContainer onSubmit={handleSubmit}>
                    <InputContainer>
                        <StyledInput
                            type="text"
                            name="Name"
                            placeholder="Name"
                            required
                            value={formData.Name}
                            onChange={handleInputChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <StyledInput
                            required
                            type="text"
                            name="FavoriteFood"
                            placeholder="Favorite Food"
                            value={formData.FavoriteFood}
                            onChange={handleInputChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <StyledInput
                            required
                            type="text"
                            name="FavoriteMovie"
                            placeholder="Favorite Movie"
                            value={formData.FavoriteMovie}
                            onChange={handleInputChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <StyledSelect
                            name="Status"
                            value={formData.Status}
                            onChange={handleInputChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </StyledSelect>
                    </InputContainer>
                    <ButtonContainer>
                        <Button type="submit">Submit</Button>
                        <Button type="button" onClick={closeModal}>
                            Cancel
                        </Button>
                    </ButtonContainer>
                </FormContainer>
            </Modal>
        </>
    );
};

export default MemberModal;
