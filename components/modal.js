import React, {Fragment} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const CustomModal = (props) => {
    return(
      <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.closeModal}
      contentLabel="Example Modal"
      className="test"
      overlayClassName="overlay"
    >
      {props.speaker &&
      <Fragment>
      <div className="modal-close-button" onClick={props.closeModal}><p ><img alt="Cross" src="/static/icons/CrossX.svg"/></p></div>
      <div className="modal-topic-list-header">
      <div className="modal-topic">
          <img className="modal-speaker-image" src={`/static/images/speakers/${ props.speaker.img }`} alt={ props.speaker.name }/>
      </div>
      <div>
          <h2 className="modal-speaker-name">{ props.speaker.name }</h2>
          <p className="modal-speaker-title">{ props.speaker.title }</p>
          <p className="modal-speaker-subtitle">{props.speaker.subtitle && props.speaker.subtitle}</p>
          <ul className="modal-speaker-social">
          {props.speaker.linkedin &&
          <li>
              <a href={ props.speaker.linkedin} target="_blank">
              <i className='fa fa-linkedin'></i>
              </a>
          </li>
          }
          {props.speaker.twitter &&
          <li>
              <a href={`${ props.speaker.twitter }`} target="_blank">
              <i className={ `fa fa-twitter` }></i>
              </a>
          </li>
          }
      </ul>
      <div className="modal-info"><p>{props.speaker.time}</p></div>
      <div className="modal-info"><p>{props.speaker.format}</p></div>
      <div className="modal-info"><p>{props.speaker.type}</p></div>
      <img className={"modal-background-logo"} src={`/static/graphics/Hive_WhiteGradient_null.svg`}/>
      </div>
    </div>


      <div className="modal-topic-list">
      <div className="oval"></div>
          <div className="modal-topic-titles">
          <div className="modal-topic-name"><h3>About <br/> {props.speaker.name}</h3></div>
        <div className="modal-topic-talkname"><h3>{props.speaker.talkname ? props.speaker.talkname : "TBC"}</h3></div>
          </div>
        <p className="modal-topic-about">{props.speaker.about ? props.speaker.about : "TBC"}</p>
        <div className="oval-small"></div>
    </div>
    </Fragment>}
      </Modal>
  )
}

export default CustomModal;
