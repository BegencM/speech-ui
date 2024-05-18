const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
color: ${props => props.$primary ? "white" : "#BF4F74"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;
`;

render(

  <div>
    <Button>Normal</Button>
    <Button $primary>Primary</Button>
  </div>
);

styles
const Title = styled.h1`  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`  padding: 4em;
  background: papayawhip;`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
<Wrapper>
<Title>
Hello World!
</Title>
</Wrapper>
);
