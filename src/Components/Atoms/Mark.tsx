import styled from 'styled-components';

const S = {
  Mark: styled.mark`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1;
    border-radius: 4px;
    padding: 2px 4px;
    box-sizing: border-box;
  `,
};

function Mark({ children }: { children: string }) {
  return <S.Mark>{children}</S.Mark>;
}

export default Mark;
