import * as React from 'react';

export default function YouTube({ id, autoplay = false }) {
  return (
    // 16:9 aspect ratio
    <div className="relative w-full pb-[56.25%]">
      <iframe
        src={`https://youtube.com/embed/${id}${autoplay ? '/?autoplay=1' : ''}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
}
