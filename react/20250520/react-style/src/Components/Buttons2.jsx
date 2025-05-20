import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const DefaultButton = styled.button`
  width: ${(props) => (props.fullWidth ? '100%' : '150px')};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: ${(props) => (props.color)};
  &:hover {
    transform: ${(props) => (props.size === 'large' ? 'scale(1.5, 1.5)' : 'scale(1, 1)')};
  }
`;

const BlueButton = styled(DefaultButton)`
  background-color: blue;
`;

const RedButton = styled(DefaultButton)`
  background-color: red;
`;

const GreenButton = styled(DefaultButton)`
  background-color: green;
`;

export default function Button2() {
  return (
    <Div>
      <BlueButton color="white">Default Button</BlueButton>
      <RedButton color="white" fullWidth={true}>Danger</RedButton>
      <GreenButton color="white" size="large">Success Button</GreenButton>
    </Div>
  );
}