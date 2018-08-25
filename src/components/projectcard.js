import React, { Component } from 'react';
import Modal from 'react-modal';

class ProjectCard extends Component {
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

  render() {
    return (
      <div className={this.state.modalIsOpen? "project-card project-card--open" : "project-card" } style={{ backgroundImage: "url(" + this.props.img +")" }}>
        <button onClick={this.openModal} >
             <div className="over">
                <h2 className="project-card__title">{ this.props.title }</h2>
                <p className="project-card__text">{ this.props.description + " | " + this.props.time }</p>
                { this.props.children }
                </div>
              <div className="under">
             </div>
        </button>
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

export default ProjectCard;
