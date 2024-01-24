import React, { FC, useEffect, useState } from 'react';
import Calendar from 'react-activity-calendar';
import { getActivities } from '../api';
import { useStyles } from './styles';

interface IDay {
    count: number;
    date: string;
    level: number;
}

const _theme = ['#ecedf0', '#9ae9a8', '#40c463', '#30a14e', '#206e39'];

export const Activities: FC = () => {
    const classes = useStyles();
    const [data, setData] = useState<Array<IDay>>([]);

    const fetchActivities = async () => {
        const activities = await getActivities();
        setData(activities.slice(161));
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <div className={classes.container}>
            <Calendar
                data={data as Array<any>}
                blockMargin={4}
                blockRadius={4}
                blockSize={18.85}
                hideColorLegend
                hideMonthLabels
                hideTotalCount
                theme={{ light: _theme, dark: _theme }}
            />
        </div>
    );
};
