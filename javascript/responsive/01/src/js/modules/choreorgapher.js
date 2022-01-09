import Choreographer from 'choreographer-js';

export let choreographer = new Choreographer({
  animations: [
    {
      range: [0, 1000],
      selector: '#box',
      type: 'scale',
      style: 'opacity',
      from: 0,
      to: 1
    }
  ]
})