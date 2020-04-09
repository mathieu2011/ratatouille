import React from "react";

class Button extends React.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <button onClick={this.handleClick}>
      {this.props.caption}
    </button>
  }
  handleClick(e: React.MouseEvent) {
    console.log("clicked", this);
  }
}

type ButtonProps = {
  caption: String,
  parent?: React.Component,
  alt?: String
}

export default Button
