import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ProfileIcon } from 'assets/images/profileIcon.svg';

const StyledProfileTab = styled.div`
  display: flex;
  padding: 30px;
`;

const StyledProfileTabButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ProfileTab = () => {
  return (
    <StyledProfileTab className="profile-tab">
      <ProfileIcon />
      <StyledProfileTabButtons>
        <span>Profil</span>
        <span>User name</span>
      </StyledProfileTabButtons>
    </StyledProfileTab>
  );
};

export default ProfileTab;
