import styled, { css } from "styled-components";

const ContCard = styled.div`
  width: 300px;
  height: 500px;
  margin: 20px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const MarginLeft15 = css`
  margin-left: 15px;
`;

const ImageStyle = styled.img`
  width: 300px;
  height: 250px;
`;
const ProductImage = (props) => {
  return (
    <ImageStyle src={props.src} alt={props.alt} />
  );
};

const TitleStyle = styled.h3`
  ${MarginLeft15}
  margin-bottom: 8px;
  font-size: 1.2rem;
`;
const ProductTitle = (props) => {
  return (
    <TitleStyle>{props.children}</TitleStyle>
  );
};

const SubTitleStyle = styled.p`
  margin: 0;
  ${MarginLeft15};
  color: #4c4c4c;
`;
const ProductSubTitle = (props) => {
  return (
    <>
      <SubTitleStyle>{props.children}</SubTitleStyle>
    </>
  );
};

const DescriptionStyle = styled.p`
  margin: 20px 0;
  height: 70px;
  ${MarginLeft15};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const ProductDescription = (props) => {
  return (
    <DescriptionStyle>{props.children}</DescriptionStyle>
  );
};

const PriceStyle = styled.p`
  margin: 0;
  ${MarginLeft15};
  color: royalblue;
  font-size: 1.2rem;
  font-weight: 600;
`;
const ProductPrice = () => {
  return (
    <>
      <PriceStyle>래브라도 리트리버</PriceStyle>
    </>
  );
};

function App3() {
    return (
        <>
            <ContCard>
                <ProductImage src={'https://picsum.photos/id/237/200/300'} alt={'검은강아지'} />
                <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
                <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
                <ProductDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias distinctio sed molestias saepe reiciendis fugit illum enim et inventore, aliquam esse non nam consectetur minima atque consequuntur voluptates, eum quia.</ProductDescription>
                <ProductPrice />
            </ContCard>
        </>
    );
}

export default App3;