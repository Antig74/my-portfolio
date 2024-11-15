import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Crafting seamless, interactive web experiences.</p>
        <p>Let’s bring your digital ideas to life with React!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:antenehgetnet09@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:antenehgetnet09@gmail.com">antenehgetnet09@gmail.com</a>
        </div>
        <div>
        <a href="tel:+251974528148"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+251974528148">(+251) 974528148</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}