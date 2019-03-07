import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster key={movie.id}/>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <Poster key={movie.id}/>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing">
          {upComing.map(movie => (
            <Poster key={movie.id}/>
          ))}
        </Section>
      )}
      {error && <Message text="Nothing Movie" color="#e74c3c" />}
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
