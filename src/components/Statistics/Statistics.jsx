import { Section } from "components/Section/Section"
import css from "./Statistics.module.css"
import { Notification } from "components/Notification/Notificastion"
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
<div>
<Section title="Statistics"/>{total > 0 ?(<div>
<p className={css.statistic}>Good:<span>{good}</span></p>
<p className={css.statistic}>Neutral:<span>{neutral}</span></p>
<p className={css.statistic}>Bad:<span>{bad}</span></p>
<p className={css.statistic}>Total:<span>{total}</span></p>
<p className={css.statistic}>Positive feedback:<span>{positivePercentage || 0}%</span></p></div>) : (<Notification/>)}
</div>)}