import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error
}) => null;

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  loading: propTypes.bool,
  error: propTypes.String
};

export default SearchPresenter;
