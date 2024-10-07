import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import audioFile from '../../audios/pokemon-Theme-8Bit.mp3';
import playIcon from '../../img/play-button.png';
import pauseIcon from '../../img/pause-button.png';
import muteIcon from '../../img/mute.png';
import soundIcon from '../../img/volume.png';

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [prevVolume, setPrevVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(prevVolume);
      audioRef.current.volume = prevVolume;
    } else {
      setPrevVolume(volume);
      setVolume(0);
      audioRef.current.volume = 0;
    }
  };

  const volumeIcon = volume === 0 ? muteIcon : soundIcon;

  return (
    <AudioContainer>
      <audio ref={audioRef} src={audioFile} autoPlay loop />
      <VolumeButton onClick={togglePlayPause}>
        <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} style={{ width: '25px', height: '25px' }} />
      </VolumeButton>
      <VolumeControlContainer>
        <VolumeControl onClick={toggleMute}>
          <img src={volumeIcon} alt={volume === 0 ? 'Mute' : 'Sound'} style={{ width: '30px', height: '30px' }} />
        </VolumeControl>
        <VolumeInput
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          orientation="vertical"
          onChange={handleVolumeChange}
        />
      </VolumeControlContainer>
    </AudioContainer>
  );
}


const AudioContainer = styled.div`
  position: fixed;
  bottom: -40%;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const VolumeButton = styled.button`
  margin-right: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 2px solid #000000;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #FFFFFF;
  }
`;

const VolumeControlContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const VolumeControl = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: 2px solid #000000;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #FFFFFF;
  }

  &:hover + input { 
    visibility: visible;
    opacity: 1;
    width: 100px;
  }
`;

const VolumeInput = styled.input`
  position: absolute;
  opacity: 0;
  transition: visibility 0.2s ease, opacity 0.2s ease;
  width: 30px;
  height: 50px;
  transform: rotate(-90deg);
  transform-origin: left bottom;
  left: 55px;
  bottom: 490px;

  -webkit-appearance: none;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%; 
    cursor: pointer;
    margin-top: -8px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    cursor: pointer;
    margin-top: -8px;
  }

  &::-webkit-slider-runnable-track {
    height: 5px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  &::-moz-range-track {
    height: 5px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  &:hover {
    visibility: visible;
    opacity: 1;
    width: 100px;
  }
`;

export default AudioPlayer;