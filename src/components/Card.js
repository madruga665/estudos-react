import React from "react";
import "./styles/Card.css";

class Card extends React.Component {
  render() {
    const { titulo, color, children } = this.props;
    return (
      <div className="card" style={{ borderColor: color }}>
        <div className="card-content">{children}</div>
        <footer className="card-footer" style={{ backgroundColor: color }}>
          {titulo}
        </footer>
      </div>
    );
  }
}

export default Card;
