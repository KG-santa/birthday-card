import React, { useEffect, useState } from "react";
import "../styles/SoundButton.scss";

const SoundButton: React.FC<{
  onButtonClick: () => void;
  disabled: boolean;
}> = ({ onButtonClick, disabled }) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [currentSource, setCurrentSource] =
    useState<AudioBufferSourceNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    const context = new AudioContext();
    setAudioContext(context);

    fetch("./assets/audio/flush.mp3")
      .then((response) => response.arrayBuffer())
      .then((data) => context.decodeAudioData(data))
      .then((buffer) => setAudioBuffer(buffer))
      .catch((error) => console.error("Error loading audio:", error));

    return () => {
      context.close();
    };
  }, []);

  const playAudio = () => {
    if (!audioContext || !audioBuffer) return;

    // Fade out the current audio if playing
    if (currentSource && gainNode) {
      gainNode.gain.setValueAtTime(
        gainNode.gain.value,
        audioContext.currentTime
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.5
      ); // Fade out over 0.5 seconds
      currentSource.stop(audioContext.currentTime + 1.5); // Stop after fade-out
    }

    // Create a new source and gain node for the next audio
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    source.buffer = audioBuffer;
    source.connect(gain);
    gain.connect(audioContext.destination);

    // Start the new audio
    gain.gain.setValueAtTime(1, audioContext.currentTime); // Ensure full volume
    source.start(audioContext.currentTime);

    // Update state
    setCurrentSource(source);
    setGainNode(gain);

    // Cleanup when the audio ends
    source.onended = () => {
      if (currentSource === source) {
        setCurrentSource(null);
        setGainNode(null);
      }
    };
  };

  const handleClick = () => {
    if (!disabled) {
      onButtonClick();
      playAudio();
    }
  };

  return (
    <>
      <button onClick={handleClick} disabled={disabled} className="flush-btn">
        <img src="./assets/imgs/flush-btn.png" alt="flush" />
      </button>
    </>
  );
};

export default SoundButton;
