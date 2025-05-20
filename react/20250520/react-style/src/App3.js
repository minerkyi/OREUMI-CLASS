import styled, { css } from "styled-components";

const StyleButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.color || '#007bff')};

  ${(props) => (props.fullWidth && css`width: 100%;`)};

  &:hover {
    ${(props) => (props.size === 'large' && css`transform: scale(1.5, 1.5);`)};
  };
`;

const Dangerbutton = styled(StyleButton)`
  background-color: #ff1120;
`;

const Successbutton = styled(StyleButton)`
  background-color: #00d559;
`;

function Button({children, variant, ...props}) {
  if(variant === 'danger') {
    return <Dangerbutton {...props}>{children}</Dangerbutton>
  } else if(variant === 'success') {
    return <Successbutton {...props}>{children}</Successbutton>
  }
  return <StyleButton {...props}>{children}</StyleButton>
}

export default function App3() {
  return (
    <>
      <Button>기본 버튼</Button>
      <Button variant="danger" fullWidth>경고 버튼</Button>
      <Button variant="success" size="large">성공 버튼</Button>
    </>
  );
}