import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_101fb8f', 'template_wfq3c6v', form.current, {
        publicKey: '1nZOpHPovwIg2KqUq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    // <form ref={form} onSubmit={sendEmail}>
    //   {/* <label>Name</label> */}
    //   {/* <input type="text" name="user_name" /> */}
    //   <Input
    //     placeholder="Name"
    //     type="text"
    //     name="user_name"
    //     className={cn(
    //       "max-w-lg bg-transparent border-t-0 border-x-0 rounded-none border-b-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
    //     )}
    //   />
    //   {/* <label>Email</label> */}
    //   {/* <input type="email" name="user_email" /> */}
    //   <Input
    //     placeholder="Email"
    //     type="text"
    //     name="user_email"
    //     className="max-w-lg bg-transparent border-t-0 border-x-0 rounded-none border-b-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
    //   />
    //   {/* <label>Message</label> */}
    //   {/* <textarea name="message" /> */}
    //   <Textarea
    //     placeholder="Message"
    //     name="message"
    //     rows={5}
    //     className="max-w-lg bg-transparent rounded-none border-2 border-white placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
    //   />
    //   {/* <input type="submit" value="Send" /> */}
    // </form>
  );
};