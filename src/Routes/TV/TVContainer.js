import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      // throw Error();
      const topRated = await this._getTopRated();
      const popular = await this._getPopular();
      const airingToday = await this._getAiringToday();
      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch (error) {
      this.setState({
        error: "Can't find TVs Information.."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  _getTopRated = async () => {
    const {
      data: { results }
    } = await tvApi.topRated();
    return results;
  };

  _getPopular = async () => {
    const {
      data: { results }
    } = await tvApi.popular();
    return results;
  };

  _getAiringToday = async () => {
    const {
      data: { results }
    } = await tvApi.airingToday();
    return results;
  };

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
