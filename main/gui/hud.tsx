import React, { useEffect, useState } from 'react';

interface Player {
    hp: number;
    param: {
        maxHp: number;
    };
}

interface Props {
    rpgCurrentPlayer: {
        subscribe: (callback: (data: { object: Player }) => void) => { unsubscribe: () => void };
    };
}

const MyHud: React.FC<Props> = ({ rpgCurrentPlayer }) => {
    const [hp, setHp] = useState(0);
    const [maxHp, setMaxHp] = useState(0);

    useEffect(() => {
        const subscription = rpgCurrentPlayer.subscribe(({ object }) => {
            setHp(object.hp);
            setMaxHp(object.param.maxHp);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [rpgCurrentPlayer]);

    const width = `${(hp / maxHp) * 100}%`;

    return (
        <div className="health-bar">
            <p>{hp} / {maxHp}</p>
            <div className="bar">
                <div className="inner-bar" style={{ width }}></div>
            </div>
        </div>
    );
};

export default MyHud;
