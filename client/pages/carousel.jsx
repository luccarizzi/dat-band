import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.timer = this.timer.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
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

  leftArrow(event) {
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

  render() {
    const { images } = this.props; // console.log(images)
    const { imageIndex } = this.state;
    return (
      <div>
        <a><i onClick={this.leftArrow} className='fas fa-chevron-left position-absolute arrow left-arrow'></i></a>
        <img className='img-fluid carousel-image' src={images[imageIndex].bandCarouselImageUrl}></img>
        <a><i className='fas fa-chevron-right position-absolute arrow right-arrow'></i></a>
      </div>
    );
  }
}
