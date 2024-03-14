import React from 'react';
import styled, { css } from 'styled-components';
import Strong from './Strong';
import { QuestType } from '../../constants/types';
import { LABELS } from '../../constants/values';

interface QuestOptions {
  data: QuestType;
  isLargeFont?: boolean;
}

const S = {
  Item: styled.li<{ $isLargeFont?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
    border-radius: 4px;
    padding: 8px;
    box-sizing: border-box;

    ${({ $isLargeFont }) =>
      $isLargeFont &&
      css`
        font-size: ${({ theme }) => `${theme.fontSize.title}px`};

        & > p {
          font-size: ${({ theme }) => `${theme.fontSize.xxLarge}px`};
        }
      `}
  `,
  Content: styled.p`
    font-size: ${({ theme }) => `${theme.fontSize.medium}px`};
  `,
};

function Quest({ data, isLargeFont = false, ...rest }: QuestOptions) {
  if (!data) {
    return <></>;
  }

  return (
    <S.Item $isLargeFont={isLargeFont} {...rest}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <Strong>{LABELS[key]}</Strong>
          <S.Content>{value}</S.Content>
        </div>
      ))}
    </S.Item>
  );
}

export default React.memo(Quest);
