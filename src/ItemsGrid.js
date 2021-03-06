import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Consumer, ActionTypes } from "./context";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 27%;
  padding: 24px;
`;

const Image = styled.div`
    width: 100%;
    height: 200px;
    background: url('${props => props.image}');
    background-size: cover;
    background-position: center;
`;

const Name = styled.h4``;

class ItemsGrid extends Component {
  clickHandler = (dispatch, e) => {
    const width = e.currentTarget.offsetWidth;
    const height = e.currentTarget.offsetHeight;
    const x = e.currentTarget.offsetLeft;
    const y = e.currentTarget.offsetTop;
    dispatch({
      type: ActionTypes.updateState,
      payload: { x, y, width, height }
    });
  };
  render = () => {
    const { items } = this.props;
    return (
      <Consumer>
        {({ dispatch }) => (
          <Wrapper>
            {items.map(({ picture, name, _id }, index) => (
              <Item
                key={index}
                onClick={this.clickHandler.bind(this, dispatch)}
              >
                <Link to={`/item/${_id}`}>
                  <Image image={picture} />
                  <Name>{name}</Name>
                </Link>
              </Item>
            ))}
          </Wrapper>
        )}
      </Consumer>
    );
  };
}

ItemsGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired
};
export default ItemsGrid;
