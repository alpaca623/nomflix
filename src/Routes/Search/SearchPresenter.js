import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  handleChange,
  loading,
  error
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Write Movie and TV Show name..."
        onChange={handleChange}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Search Result">
            {movieResults.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Movie Search Result">
            {tvResults.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string
};

export default SearchPresenter;
