import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.3;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const ItemContainer = styled.div`
  margin: 10px 20px;
  display:flex;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Item = styled.span``;

const Divider = styled.div`
  margin: 0 10px;
`;

const SearchPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImg={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImg={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noImage.png")
          }
        />
        <Title>
          {result.original_title ? result.original_title : result.original_name}
        </Title>
        <ItemContainer>
          <Item>
            {result.release_date
              ? result.release_date.substring(0, 4)
              : result.first_air_date.substring(0, 4)}
          </Item>
          <Divider>∙</Divider>
          <Item>
            {result.runtime ? result.runtime : result.episode_run_time[0]} min
          </Item>
        </ItemContainer>
      </Content>
    </Container>
  );

SearchPresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool
};

export default SearchPresenter;
