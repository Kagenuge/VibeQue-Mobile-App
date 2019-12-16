import React, { Component } from 'react';

const urli = 'http://localhost:5000/api/topics';

export const postSong = songUrl => {
  console.log('postSongToimii');
  return fetch(urli, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(songUrl)
  });
};
