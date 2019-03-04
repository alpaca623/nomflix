import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi, moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: true
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    // 1. 문자를 받아와서
    const { searchTerm } = this.state;
    /* 2. 검색어가 공백이 아닐 경우, 검색요청을 한 결과를 받아온다.?? -
     * (참고)api 요청을 할 경우, await를 하지 않으면 걍 날라가버린다..
     */
    const {
      data: { results: tvResults }
    } = await tvApi.search(searchTerm);
    const {
      data: { results: movieResults }
    } = await moviesApi.search(searchTerm);
    this.setState({
      movieResults,
      tvResults
    });
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
