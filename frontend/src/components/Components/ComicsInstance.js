import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ComicsInstance extends Component {
  constructor(props) {
    super(props)
    this.instance = React.createRef()
    this.state = {

    }
  }


  render() {
    const { className, id, text, author_name, views_count, image_url, height, width } = this.props
    let height_w = Number(height)
    let width_w = Number(width)
    let delta = 40
    return (
      <Link
        to={`/comics/${id || ''}`}
        ref={this.instance}
        className={`py-4 mr-2 w-[160px] h-[320px] flex flex-col ${className || ''}`}>
            <div className="">
              <img src={`${image_url || ''}`} alt="Comics" className={`h-[240px] w-[160px] `} />
            </div>
            <div className="flex flex-row flex-nowrap items-center text-[#919191] font-semibold text-xs mb-2">
              <p className="mr-2">{author_name || ''}</p>
              <p className="mr-1">{views_count || ''}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
      
            </div>
            <div className="slider-item-title leading-5 w-full">
              <h3 className="text-gray-200 truncate break-before-auto break-after-all">{text || ''}</h3>
            </div>
      </Link>
    )
  }
}