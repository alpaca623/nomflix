import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 3px;
  background-position:center center;
  transition:opacity 0.1s linear;
`;

const Rating = styled.div`
  bottom: 3px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition:opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Year = styled.div`
  font-size: 12px;
  font-color: #bdc3c7;
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    {console.log(imageUrl)}
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noImage.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ️️⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 18 ? `${title.substring(0,16)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.prototype = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
