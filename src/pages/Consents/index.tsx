/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Icon } from 'src/components';
import { getAllConsensts } from 'src/utils';

const Consents = () => {
  const timeout = useRef<NodeJS.Timeout>();
  const audio = useRef<HTMLAudioElement>(new Audio());
  const [playingAudioIndex, setPlayAudioIndex] = useState<number | null>(null);
  const consents = getAllConsensts();

  useEffect(() => {
    if (playingAudioIndex !== null) {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      audio.current.src = consents[playingAudioIndex].audio;
      audio.current.play();

      timeout.current = setTimeout(() => {
        audio.current?.pause();
        audio.current.currentTime = 0;
        setPlayAudioIndex(null);
      }, 5000);
    }
  }, [playingAudioIndex, timeout, audio]);

  return (
    <div>
      <h2 css={{ textAlign: 'center', paddinBottom: '16px' }}>Consent Form</h2>

      {consents.length > 0 ? (
        <>
          <Row>
            <span>Details</span>
            <span>Consent Given</span>
          </Row>

          {consents.map((item, index) => (
            <React.Fragment key={index}>
              <Row>
                <div>
                  <p css={{ margin: 0 }}>{item.name}</p>
                  <p css={{ color: '#787878', fontSize: '12px', margin: '8px 0 0 0' }}>Language: {item.language}</p>
                </div>

                <div css={{ display: 'flex', alignItems: 'center' }}>
                  <Icon size={20} icon={item.agree ? 'check' : 'clear'} />
                  <Button
                    onClick={() => {
                      audio.current?.pause();
                      setPlayAudioIndex(playingAudioIndex === index ? null : index);
                    }}
                    css={{ width: '40px', height: '40px', borderRadius: '50%', padding: 0, marginLeft: '24px' }}
                  >
                    <Icon icon={playingAudioIndex === index ? 'pause' : 'play'} size={14} />
                  </Button>
                </div>
              </Row>
            </React.Fragment>
          ))}
        </>
      ) : (
        <p css={{ textAlign: 'center' }}>Consents not found</p>
      )}
    </div>
  );
};

const Row = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(odd) {
    background-color: #f1f1f1;
  }
`;

export default Consents;
