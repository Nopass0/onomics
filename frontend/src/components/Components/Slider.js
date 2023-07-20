import React, { Component } from 'react';

export class Slider extends Component {
  constructor(props) {
    super(props)
    this.sliderRef = React.createRef()
    this.state = {
      isDragging: false,
      dragStartX: 0,
      dragStartScrollLeft: 0,
    }
  }

  onMouseDown = (e) => {
    const { current: slider } = this.sliderRef
    const { clientX } = e
    this.setState({
        isDragging: true,
        dragStartX: clientX+10,
        dragStartScrollLeft: slider.scrollLeft,
    })
    }

    onMouseUp = () => {
        this.setState({ isDragging: false })
    }

    onMouseMove = (e) => {
        const { isDragging, dragStartX, dragStartScrollLeft } = this.state
        const { current: slider } = this.sliderRef
        if (!isDragging) return
        slider.scrollLeft = dragStartScrollLeft - e.clientX + dragStartX
    }

    onMouseWheel = (e) => {
        const { current: slider } = this.sliderRef
        e.preventDefault()
        slider.scrollLeft += e.deltaY
    }

    componentDidMount() {
        const { current: slider } = this.sliderRef
        slider.addEventListener('mousedown', this.onMouseDown)
        slider.addEventListener('mouseup', this.onMouseUp)
        slider.addEventListener('mousemove', this.onMouseMove)
        slider.addEventListener('wheel', this.onMouseWheel)
    }
 
  render() {
    const { className, children } = this.props;
    const { sliderStyle } = this.state;

    return (
      <div
        ref={this.sliderRef}
        className={`container-snap slider-container overflow-y-hidden flex flex-row flex-nowrap scrol ${className || ''}`}>
        {children}
      </div>
    )
  }
}