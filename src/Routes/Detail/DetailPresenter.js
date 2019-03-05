import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const SearchPresenter = ({ result, error, loading }) => null;

SearchPresenter.propTypes = {
  result: propTypes.array,
  error: propTypes.String,
  loading: propTypes.bool,
};

export default SearchPresenter;
