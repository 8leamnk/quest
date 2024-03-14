import React from 'react';
import styled from 'styled-components';

const S = {
  Text: styled.p``,
};

function Content({ children }: { children: string }) {
  return <S.Text>{children}</S.Text>;
}

export default React.memo(Content);
