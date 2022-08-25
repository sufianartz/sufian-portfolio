import React, { useRef } from 'react'
import './contact.css'
import  {MdOutlineEmail} from'react-icons/md'
import  {RiMessengerLine} from'react-icons/ri'
import  {BsWhatsapp} from'react-icons/bs'
import emailjs from'emailjs-com'

const Contact = (props) => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnw5xyq', 'template_sk28l5g', form.current, '56vHLESOQicThvKfc')

    e.target.reset();
  alert  ('Thankyou for sending me a message, I will respond ASAP' )
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

    <div className='container contact__container'>
    <div className='contact__options'>
<article className='contact__option'>
<MdOutlineEmail className='contact__option-icon'/>
<h4>Email</h4>
    <h5>sufian03272@email.com</h5>
<a href='mailto:sufian03272@gmail.com' target='_blank'>Send a Mesage</a>
</article>

<article className='contact__option'>
<RiMessengerLine className='contact__option-icon'/>
<h4>Messenger</h4>
    <h5>Muhammad Sufian</h5>
<a href='https://www.facebook.com/profile.php?id=100041719779318' target='_blank'>Send a Mesage</a>
</article>

<article className='contact__option'>
<BsWhatsapp className='contact__option-icon'/>
<h4>WhatsApp</h4>
    <h5>+923443460162</h5>
<a href='https://api.whatsapp.com/send?phone=923462860162' target='_blank'>Send a Mesage</a>
</article>

    </div>

<form ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Your Full Name' required/>
<input type='email' name='email' placeholder='Your Email' required/>
<textarea type='message' name='message' rows='7' placeholder='Your Message' required/>
<button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
    </div>
    </section>
  )
}

export default Contact