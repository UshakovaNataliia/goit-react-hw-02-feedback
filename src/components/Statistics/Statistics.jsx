import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, message }) => {
    const total = good + neutral + bad;
    const positivePercentage = () => {
        return ((+(good*100)/total).toFixed(0));
    }

    if (total === 0) return <Notification message={message} />;
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage()}%</p>
        </>
    )
};

const mapStateToProps = state => ({
    good: state.feedback.good,
    neutral: state.feedback.normal,
    bad: state.feedback.bad,
    message: state.selectLang.langSet.NO_FEEDBACK
})

export default connect(mapStateToProps)(Statistics);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}