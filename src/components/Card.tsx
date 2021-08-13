import React from "react";
import "./styles/Card.css";
import './styles/Animations.css';

interface CardProps {
  titulo: string;
  color?: string;
}

class Card extends React.Component<CardProps> {
  render() {
    const { titulo, color, children } = this.props;
    return (
      <div className="card animate-up" style={{ borderColor: color }}>
        <div className="card-content">{children}</div>
        <footer className="card-footer" style={{ backgroundColor: color }}>
          {titulo}
        </footer>
      </div>
    );
  }
}

export default Card;
