import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
    margin-left: 10px;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    &:hover{
        background-color: #99ffff;
    }
`;

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <>
      {keys.map(key => (
        <Button key={key} onClick={() => onLeaveFeedback(key)}>
          {key[0].toUpperCase()+key.slice(1)}
        </Button>
      ))}
    </>
  );
};

FeedbackButtons.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;