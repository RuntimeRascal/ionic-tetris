import { IonContent } from '@ionic/react';
import * as React from 'react';
import { FC } from 'react';
import Terimones from './Tetrimones';
import Board from './Board';
import './game.scss';

const Game: FC = () => {
    return <IonContent>
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-tetrimones">
                <Terimones />
            </div>
        </div>
    </IonContent>
}

export default Game;