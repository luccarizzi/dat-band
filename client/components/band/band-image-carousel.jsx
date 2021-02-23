import React from 'react';

export default class BandImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      this.timer,
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timer() {
    const { imageIndex } = this.state;
    if (this.state.imageIndex === 2) {
      this.setState({
        imageIndex: 0
      });
    } else {
      this.setState({
        imageIndex: imageIndex + 1
      });
    }
  }

  render() {
    const { bandData } = this.props;
    const { imageIndex } = this.state;
    return (
      <div className='row g-0'>
        <div className='col d-flex justify-content-center mb-2'>
          <img
            className='object-fit-cover carousel-image rounded'
            src={bandData[imageIndex].bandCarouselImageUrl}
            alt={`${bandData[imageIndex].bandName} band members.`}>
          </img>
        </div>
      </div>
    );
  }
}
