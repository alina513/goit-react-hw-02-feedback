import { Section } from "components/Section/Section";
import css from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({onGood, onNeutral, onBad}) => 
   (<div className={css.list}>
    <Section title="Please leave feedback"/>
    <button className={css.button} onClick={onGood}>Good</button>
   <button className={css.button} onClick={onNeutral}>Neutral</button>
   <button className={css.button} onClick={onBad}>Bad</button>
   </div>);
