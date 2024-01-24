import React, { FC, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import githubLogo from 'src/assets/github.png';
import { Activities } from 'src/features/activities/ui';
import { LeetCode } from 'src/features/leetcode';
import { Link } from 'src/features/link';
import { Card } from 'src/widgets/card';
import { useStyles } from './styles';

const DEFAULT_WIDTH = 1920;
const DEFAULT_HEIGHT = 1080;
const DEFAULT_SCALE = 1;

export const MainPage: FC = () => {
    const classes = useStyles();
    const [scale, setScale] = useState<number>(DEFAULT_SCALE);
    const [mobile, setMobile] = useState<boolean>(false);

    useLayoutEffect(() => {
        const onResize = () => {
            if (window.innerWidth <= 768) {
                setMobile(true);
                return;
            }

            const percent = DEFAULT_WIDTH / 100;
            setScale(window.innerWidth / percent / 100);
        };

        onResize();
        setMobile(false);

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <main className={classes.wrapper}>
            <div
                className={classes.container}
                style={{
                    transform: `scale(${mobile ? DEFAULT_SCALE : scale})`,
                    marginTop: (window.innerHeight - DEFAULT_HEIGHT * scale) / 2,
                }}
            >
                <div className={clsx(classes.column, classes.column1)}>
                    <Card width={680} height={428}>
                        {/* <Experience /> */}
                    </Card>

                    <Card width={332} height={204}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={332} height={204}>
                        {/* <p>card</p> */}
                        <LeetCode />
                    </Card>

                    <Card width={332} height={204}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={332} height={204}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={680} height={160} className={classes.activities}>
                        {/* <p>card</p> */}
                        <Activities />
                    </Card>
                </div>

                <div className={clsx(classes.column, classes.column2)}>
                    <Card width={236} height={160}>
                        <Link
                            background="linear-gradient(to right, #434343 0%, black 100%)"
                            url="https://github.com/gerrronimo"
                            img={githubLogo}
                        />
                    </Card>

                    <Card width={236} height={160}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={488} height={692}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={236} height={160}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={236} height={160}>
                        {/* <p>card</p> */}
                    </Card>
                </div>
                <div className={clsx(classes.column, classes.column3)}>
                    <Card width={680} height={250}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={175} height={250}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={490} height={250}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={680} height={250}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={330} height={245}>
                        {/* <p>card</p> */}
                    </Card>

                    <Card width={330} height={245}>
                        {/* <p>card</p> */}
                    </Card>
                </div>
            </div>
        </main>
    );
};
