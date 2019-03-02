import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };
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
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
