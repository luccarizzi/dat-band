import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
  }

  render() {
    const { images } = this.props; // console.log(images)
    return (
      <img className='img-fluid' src={images[0].bandCarouselImageUrl}></img>
    );
  }
}
