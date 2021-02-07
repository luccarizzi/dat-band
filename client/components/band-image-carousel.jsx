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
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
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

  leftClick(event) {
    const { imageIndex } = this.state;
    if (imageIndex === 0) {
      this.setState({
        imageIndex: 2
      });
      return;
    }
    this.setState({
      imageIndex: imageIndex - 1
    });
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  rightClick(event) {
    const { imageIndex } = this.state;
    if (imageIndex === 2) {
      this.setState({
        imageIndex: 0
      });
      return;
    }
    this.setState({
      imageIndex: imageIndex + 1
    });
    clearInterval(this.timerID);
    this.componentDidMount();
  }

  render() {
    const { bandData } = this.props;
    const { imageIndex } = this.state;
    return (
      <div className='row'>
        <div className='col-12 g-0'>
          <a><i onClick={this.leftClick} className='fas fa-chevron-left position-absolute arrow left-arrow'></i></a>
          <img className='img-fluid carousel-image' src={bandData[imageIndex].bandCarouselImageUrl}></img>
          <a><i onClick={this.rightClick} className='fas fa-chevron-right position-absolute arrow right-arrow'></i></a>
        </div>
      </div>
    );
  }
}
