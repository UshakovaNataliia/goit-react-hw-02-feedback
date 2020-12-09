import React from "react";
import { connect } from "react-redux";
import {
  addGood,
  addBad,
  addNormal,
} from "../../redux/feedback/actionsFeedback";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  margin-left: 10px;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #99ffff;
  }
`;

const FeedbackButtons = ({ addGood, addNormal, addBad, btns }) => {
  console.log('btns :>> ', btns);
  return (
    <>
      {btns && (
        <>
          <Button onClick={addGood}>{btns.GOOD}</Button>
          <Button onClick={addNormal}>{btns.NORMAL}</Button>
          <Button onClick={addBad}>{btns.BAD}</Button>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  btns: state.selectLang.langSet.buttons,
});

const mapDispatchToProps = {
  addGood,
  addNormal,
  addBad,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackButtons);

FeedbackButtons.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
