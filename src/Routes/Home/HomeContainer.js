import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const nowPlaying = await this._getNowPlaying();
      const upcoming = await this._getUpComing();
      const popular = await this._getPopular();
      // throw Error();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch (error) {
      this.setState({
        error: "Can't find Moives Information..."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  // logic

  _getNowPlaying = async () => {
    const {
      data: { results }
    } = await moviesApi.nowPlaying();
    return results;
  };

  _getUpComing = async () => {
    const {
      data: { results }
    } = await moviesApi.upcoming();
    return results;
  };

  _getPopular = async () => {
    const {
      data: { results }
    } = await moviesApi.popular();
    return results;
  };

  render() {
    const { nowPlaying, upcoming, popular, loading, error } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        loading={loading}
        error={error}
      />
    );
  }
}
