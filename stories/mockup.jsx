import React from 'react';

const style = {
  childrenDiv: {
    background: '#ee5253',
    height: '200px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
};

const childrenDiv = [
  (
    <div
      key={1}
      style={style.childrenDiv}
    >
      Item 1
    </div>
  ),
  (
    <div
      key={2}
      style={{ ...style.childrenDiv, background: '#48dbfb' }}
    >
      Item 2
    </div>
  ),
  (
    <div
      key={3}
      style={{ ...style.childrenDiv, background: '#10ac84' }}
    >
      Item 3
    </div>
  ),
  (
    <div
      key={4}
      style={{ ...style.childrenDiv, background: '#f368e0' }}
    >
      Item 4
    </div>
  ),
  (
    <div
      key={5}
      style={{ ...style.childrenDiv, background: '#8395a7' }}
    >
      Item 5
    </div>
  ),
];

export { childrenDiv };
