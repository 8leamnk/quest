import styled from 'styled-components';

interface LabelOptions {
  children: React.ReactNode;
  labelText: string;
}

const S = {
  Label: styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  LabelText: styled.span``,
};

function Label({ labelText, children, ...rest }: LabelOptions) {
  return (
    <S.Label {...rest}>
      <S.LabelText>{labelText}</S.LabelText>
      {children}
    </S.Label>
  );
}

export default Label;
