import { useState } from 'react';
import { useTeamMemberContext } from '../../../hooks';
import { IMember } from '../../../interfaces';
import { Subheading, Button, Modal, StyledInput, StyledSelect } from '../../../styles/main';
import { FormContainer, InputContainer, ButtonContainer } from './ModalUser.styles'

const initState = {
    Name: '',
    FavoriteFood: '',
    FavoriteMovie: '',
    Status: 'Active',
};

export const MemberModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<IMember>(initState);
    const { addNewMember } = useTeamMemberContext();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setFormData(initState);
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
            <Button onClick={openModal}>Create Member</Button>
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

