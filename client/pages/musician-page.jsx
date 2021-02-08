import React from 'react';

export default class MusicianPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };

    this.page = this.page.bind(this);
  }

  page() {
    return (
      <h1>test</h1>
    );
  }

  render() {
    return (
      <this.page />
    );
  }
}
