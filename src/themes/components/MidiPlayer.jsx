import { useState } from 'react';
import PlayPauseToggle from './PlayPauseToggle';
import VerovioRenderer from './Verovio';

const Player = (props) => {
    const { score } = props;
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <div>
            <VerovioRenderer url = { score } />
            <PlayPauseToggle onClick={() => setIsPlaying(!isPlaying)} isPlaying={isPlaying}/>
        </div>
    )
}

export default Player;