import { useState } from 'react';
import PlayPauseToggle from './PlayPauseToggle';
import VerovioRenderer from './Verovio';

const Player = (props) => {
    const { score } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const [midi, setMidi] = useState();

    return(
        <div>
            <VerovioRenderer url = { score } setMidi = {setMidi} />
            <>{midi}</>
            <PlayPauseToggle onClick={() => setIsPlaying(!isPlaying)} isPlaying={isPlaying}/>
        </div>
    )
}

export default Player;