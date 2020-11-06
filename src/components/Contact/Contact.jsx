import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import  { useState } from 'react';



const Contact = (props) => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = e => {
      let value = e.target.value;
      setUnmountOnClose(JSON.parse(value));
  }

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              onClick={toggle}
            >
              {btn || "Let's Talk"}

            </a>
            <div>
                     <Form inline onSubmit={(e) => e.preventDefault()}>


                     </Form>
                     <Modal isOpen={modal} toggle={toggle}  unmountOnClose={unmountOnClose}>
                         <ModalHeader toggle={toggle}>Contact</ModalHeader>
                         <ModalBody>
                         <form id="contactform" method="post"
   action="https://www.flexyform.com/f/e4f8173e5e05be574d0e61a8140c7100269efeef">
 <p>

    <Input type="text" name="fullname" placeholder="Your Name" rows={1} />
 </p>
 <p>

    <Input type="email" name="_reply_to" placeholder="Your E-Mail" rows={1} />
 </p>
 <p>

    <Input type="textarea" name="message" placeholder="Your Message" rows={5} />
 </p>

</form>
                         </ModalBody>
                         <ModalFooter>
                             <Button type="submit" form="contactform" color="primary"  onClick={toggle}>Submit</Button>

                             <Button  color="secondary" onClick={toggle}>Cancel</Button>
                         </ModalFooter>
                     </Modal>
                 </div>

          </div>
        </Fade>
      </Container>

    </section>
  );
};

export default Contact;
