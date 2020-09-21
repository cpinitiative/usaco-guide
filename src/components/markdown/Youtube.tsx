import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  // 16:9 aspect ratio
  padding-bottom: 56.25%;
`;

export default function Youtube({ id, autoplay = false }) {
  return (
    <Container>
      <iframe
        src={`https://youtube.com/embed/${id}${autoplay ? '/?autoplay=1' : ''}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </Container>
  );
}
