import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  padding:0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Show">
          {topRated.map(show => <span key={show.id}>{show.name}</span>)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(show => <span key={show.id}>{show.name}</span>)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Aring Today">
          {airingToday.map(show => <span key={show.id}>{show.name}</span>)}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.string,
};

export default TVPresenter;
