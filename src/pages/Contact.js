import "../app.css"
import { MdEmail } from "react-icons/md"
import { RiWhatsappFill } from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bd19gie', 'template_4uwhx0e', form.current, 'GHanAPbae1T7Az0vq')
      .then((result) => {
        window.alert('Your Message has been sent');
        // console.log(result.text);
      }, (error) => {
        window.alert('something went wrong please try again later');
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <>
      <Navbar />
      <div id="contact" className="max-w-6xl mx-auto">
        <h2 className="text-custom-red text-xl  text-center my-8">Contact Me</h2>

        <div className="flex flex-col gap-8 px-8 justify-center md:flex-row">

          <div className="flex flex-col gap-y-4 rounded">
            <article className="bg-secondary p-8 text-center rounded">
              <MdEmail className="mx-auto text-lg text-2xl text-custom-red" />
              <h4 className="text-lg font-bg-state-50 bolg my-1">Email</h4>
              <h5>kumarvikashv681@gmail.com</h5>
              <a className="text-xl text-custom-red" href="mailto:kumarvikashv681@gmail.com">Send a message</a>
            </article>
            <article className="bg-secondary p-8 text-center rounded">
              <RiWhatsappFill className="mx-auto text-2xl text-custom-red" />
              <h4 className="text-lg font-bolg my-1">WhatsApp</h4>
              <a className="text-xl text-custom-red" href="https://api.whatsapp.com/send?phone=+918076864339">Send a message</a>
            </article>
          </div>

          <form  className=" flex flex-col gap-2 md:w-[60%] lg:w-[50%]" ref={form} onSubmit={sendEmail}>
            <input className="p-6 outline-none border border-custom-red rounded" type="text" name='name' placeholder='Your Full Name' required />
            <input className="p-6 outline-none border border-custom-red rounded" type="email" name='email' placeholder='Your Email' required />
            <textarea className="p-1 outline-none rounded border border-custom-red" name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className="w-fit p-2 bg-custom-red rounded text-white">Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}

