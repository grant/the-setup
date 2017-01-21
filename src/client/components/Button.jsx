import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';

/**
 * A button.
 */
@Radium
export default class Button extends Component {
  constructor() {
    super();
  }

  render() {
    return <div style={{
      color: 'green'
    }}>
      Green w/ button:&nbsp;
      <button>button</button>
    </div>;
  }
}
