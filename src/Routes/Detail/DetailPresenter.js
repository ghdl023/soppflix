import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, loading, error }) => null;

DetailPresenter.PropTypes = {
  result: PropTypes.array,
  loading: PropTypes.boolean.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
