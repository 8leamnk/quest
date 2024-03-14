import React from 'react';
import styled from 'styled-components';
import ButtonsLayout from '../Layout/ButtonsRightLayout';

const S = {
  Box: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};

function ListBoxAndButton({
  listtNode,
  buttonNode,
}: {
  listtNode: React.ReactNode;
  buttonNode: React.ReactNode;
}) {
  return (
    <S.Box>
      {listtNode}

      <ButtonsLayout>{buttonNode}</ButtonsLayout>
    </S.Box>
  );
}

export default React.memo(ListBoxAndButton);
