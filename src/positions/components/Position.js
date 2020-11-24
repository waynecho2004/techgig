import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class Position extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const positions = this.props.positions.filter((position) => {
      return position.id === this.props.id;
    });
    const position = positions[0];

    return (
      <div className="position">
        {/* Job ID,type,URl,Created_at,Company,Company URL,,location,title,description*/}
        <hr />
        <h6 class="red">
          <i>{position.title}</i>
        </h6>
        <i>
          <a href={position.company_url} target="_blank">
            {position.company}
          </a>
          , {position.location}, {position.created_at}
        </i>
        <br></br>
        <img
          src={position.company_logo}
          alt="company logo"
          width="70"
          height="20"
        ></img>
        <hr />

        <h6 class="red">
          <i>Job Description:</i>
        </h6>
        <div>{ReactHtmlParser(position.description)} </div>

        <a href={position.how_to_apply}>How To Apply</a>
      </div>
    );
  }
}
export default Position;
