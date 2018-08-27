import React, { Component } from 'react';
import Modal from 'react-modal';

class TimelineCard extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return (
      <div className="timeline-card">
        <div className={"timeline-card__circle" + (this.props.end === "top"? "--top" : "")}></div>
        <div className="timeline-card__line"></div>
        <div className={"timeline-card__content" + (this.props.side === "left"? "--left" : this.props.side === "right"? "--right" : "")}>
          <button className="modal__wrap" onClick={this.openModal} >
            <h2 className="timeline-card__title">{this.props.title}</h2>
            <p className="timeline-card__text">{this.props.company}</p>
            <p className="timeline-card__text">{this.props.time}</p>
          </button>
        </div>
        <div className={"timeline-card__circle" + (this.props.end === "bot"? "--bot" : "")}></div>
        <Modal
          className="modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel={this.props.title}
          closeTimeoutMS={400}>
          <h2>{this.props.title}</h2>
          <p>{this.props.paragraph}</p>
            <button className="modal__button" onClick={this.closeModal}>X</button>
        </Modal>
        </div>
    );
  }
}

export default TimelineCard;
