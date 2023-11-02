import { Section } from "./Section/Section";
import React from "react";
import {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrementGood = () => {
    this.setState(prevState =>{ return{good: prevState.good + 1}})
    this.countTotalFeedback();
  }
  handleIncrementNeutral = () => {
    this.setState(prevState =>{ return{neutral: prevState.neutral + 1}})
  }
  handleIncrementBad = () => {
    this.setState(prevState =>{ return{bad: prevState.bad + 1}})
  }
  countTotalFeedback = () => {
    return  this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Number.parseInt((this.state.good/(this.state.good + this.state.neutral + this.state.bad))*100)
  }

  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 20
      }}
    >
      <FeedbackOptions onGood = {this.handleIncrementGood} onNeutral={this.handleIncrementNeutral} onBad={this.handleIncrementBad}/>
      <Statistics good = {this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
    </div>
  );}
};
