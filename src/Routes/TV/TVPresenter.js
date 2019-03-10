import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Show">
          {topRated.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              isMovie={false}
              year={show.release_date && show.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              isMovie={false}
              year={show.release_date && show.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Aring Today">
          {airingToday.map(show => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              isMovie={false}
              year={show.release_date && show.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && (
        <Message text="Errors, send message administrator" color="#e74c3c" />
      )}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.string
};

export default TVPresenter;
