import styled from 'styled-components';

interface LabelOptions {
  htmlFor: string;
  children: string;
}

const S = {
  Label: styled.label`
    display: inline-block;
    min-width: 88px;
  `,
};

function Label({ children, ...rest }: LabelOptions) {
  return <S.Label {...rest}>{children}</S.Label>;
}

export default Label;
