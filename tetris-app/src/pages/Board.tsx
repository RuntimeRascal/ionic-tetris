import * as React from 'react';
import { FC, useState, useEffect } from 'react';
import { IonCol, IonRow, IonGrid } from '@ionic/react';


const Square: FC<{ value: number }> = ({ value }) => {
    const squareStyle = {
        minHeight: '40px',
        border: '1px solid black'
    };

    return <IonCol style={squareStyle}>{value}</IonCol>;
}
const Board: FC = () => {
    const [board, setBoard] = useState(new Array<Array<number>>());

    useEffect(() => {
        const b = board;
        for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
            const r: number[] = [];
            for (let colIndex = 0; colIndex < 10; colIndex++) {
                r.push(0);
            }
            b.push(r);
        }
        setBoard(b);
    }, [board]);

    return <IonGrid className="no-padding" >{
        board.map((row, rowIndex) => {
            return <IonRow key={`row-${rowIndex}`}
                className="ion-justify-content-center">
                {
                    row.map((col, colIndex) => {
                        return <Square key={`row-${rowIndex}-col-${colIndex}`} value={col} />;
                    })
                }
            </IonRow>;
        })
    }</IonGrid>;
}

export default Board;