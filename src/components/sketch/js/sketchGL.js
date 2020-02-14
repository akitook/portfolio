import Common from './Common'
import Shape from './Shape'

export default class SketchGL {
  constructor(props) {
    this.props = props
    this.lastInnerWidth = 0
    this.init()
  }

  init() {
    Common.init(this.props.$canvas)
    this.shape = new Shape()
    this.lastInnerWidth = window.innerWidth
    window.addEventListener('resize', this.resize.bind(this))
    this.loop()
  }

  resize() {
    if (this.lastInnerWidth !== window.innerWidth) {
      this.lastInnerWidth = window.innerWidth
      Common.resize()
    }
  }

  loop() {
    this.render()
    requestAnimationFrame(this.loop.bind(this))
  }

  render() {
    this.shape.update()
    Common.render()
  }
}
