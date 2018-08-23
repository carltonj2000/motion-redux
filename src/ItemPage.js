import React, { Component } from "react";
import styled from "styled-components";

import fakeItems from "./fakeItems";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Image = styled.div`
    width: 100%;
    height: 400px;
    background: url('${props => props.image}');
    background-size: cover;
    background-position: center;
`;

const Name = styled.h4``;

class ItemPage extends Component {
  render() {
    const item = fakeItems.filter(i => i._id === this.props.match.params.id)[0];
    if (!item) return <h1>Item Not Found.</h1>;
    const { name, picture, description } = item;
    return (
      <Wrapper>
        <Image image={picture} />
        <Name>{name}</Name>
        <p>{description}</p>
      </Wrapper>
    );
  }
}
export default ItemPage;
