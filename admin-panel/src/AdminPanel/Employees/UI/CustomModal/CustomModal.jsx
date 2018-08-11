import React from 'react';
import { Modal } from 'react-bootstrap';
import './CustomModal.css'
import utils from '../../../../utils'

class CustomModal extends React.Component {

    state = {
        show: false
    };

    handleShow = () => this.setState({ show: true });

    handleHide = () => this.setState({ show: false });

    render() {
        return (
            <div>
                <button className={"btn " + this.props.buttonClassName} onClick={this.handleShow} style={this.props.buttonStyle}>
                    {this.props.buttonText}
                </button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                    bsSize={this.props.size}
                >
                    <Modal.Header closeButton={this.props.closeButton}>
                        <Modal.Title id="contained-modal-title-lg">
                            {this.props.header}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            React.cloneElement(this.props.children, {
                                callback: utils.isReactElement(this.props.children) ? this.handleHide : undefined
                            })
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {
                            React.cloneElement(this.props.footer, {
                                onClick: () => {
                                    if (utils.isFunction(this.props.footer.props.onClick)) {
                                        this.props.footer.props.onClick();
                                        this.handleHide();
                                    }
                                }
                            })
                        }
                        <button className="btn btn-default" onClick={this.handleHide}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CustomModal;
