import { FC } from 'react';
import * as React from 'react';
export interface MetricsProps {
    /** Percentage change of Metric */
    percentage: number;
    /** Field to check total change of the metric positive negative or neutral(no change) */
    metricChange: 'positive' | 'negative';
    /** Main Label of the Metric */
    metricLabel?: string;
    icon?: React.ReactNode;
    metricValue?: string;
    /** Text for when you last viewed the metric */
    lastViewedText?: string;
    /** View Details button Text */
    viewDetailsText?: string;
    /** View Callback function you can add your modal or redirection to page here */
    viewDetailsCalllback?: () => {};
}
declare const Metrics: FC<MetricsProps>;
export default Metrics;
