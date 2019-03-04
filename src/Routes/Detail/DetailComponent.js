import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: location.pathname.includes("/movie/")
    };
  }
  async componentDidMount() {
    /*
     * Detail component는 Detail 보기를 위한 id 값을 파라미터로 받아와야 한다.
     */
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    let result = null;
    try{
      if(isMovie){
        ({data:result} = await moviesApi.movieDetail(parseId));
      }else{
        ({data:result} = await tvApi.tvDetail(parseId));
      }
    }catch{
      this.setState({error : "Can't find anything"});
    }finally{
      this.setState({loading:false, result});
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
