import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  null;

TVPresenter.propTypes = {
  topRated: propTypes.array,
  popular: propTypes.array,
  airingToday: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.String
};

export default TVPresenter;
