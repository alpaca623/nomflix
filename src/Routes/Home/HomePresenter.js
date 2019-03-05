import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import Section from "Components/Section";

const Container = styled.div`
  padding:0px 10px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => movie.title)}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing">
          {upComing.map(movie => movie.title)}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upComing: propTypes.array,
  popular: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.string
};

export default HomePresenter;
