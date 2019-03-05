import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  null;

HomePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upComing: propTypes.array,
  popular: propTypes.array,
  loading: propTypes.bool,
  error: propTypes.String
};

export default HomePresenter;
