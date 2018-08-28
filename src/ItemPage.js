import React, { Component } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

import fakeItems from "./fakeItems";
import { Consumer } from "./context";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
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
    const endWidth = window.innerWidth;
    const endHeight = window.innerHeight;
    return (
      <Consumer>
        {({ x, y, width, height }) => (
          <Motion
            defaultStyle={{
              x: x,
              y: y,
              width: width,
              height: height
            }}
            style={{
              x: spring(0),
              y: spring(0),
              width: spring(endWidth),
              height: spring(endHeight)
            }}
          >
            {style => (
              <Wrapper
                style={{
                  left: style.x,
                  top: style.y,
                  width: style.width,
                  height: style.height
                }}
              >
                <Image image={picture} />
                <Name>{name}</Name>
                <p>{description}</p>
              </Wrapper>
            )}
          </Motion>
        )}
      </Consumer>
    );
  }
}
export default ItemPage;
