import React from 'react';
import styled from 'styled-components';
import Strong from '../Atoms/Strong';

const S = {
  StickyHeader: styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    padding: 8px 16px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
  `,
};

function StickyHeader({
  text,
  children,
}: {
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <S.StickyHeader>
      {text && <Strong>{text}</Strong>}
      {children && children}
    </S.StickyHeader>
  );
}

export default StickyHeader;
