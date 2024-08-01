"use client";

import { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Kontakt = () => {
  const router = useRouter();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
//   const [captcha, setCaptcha] = useState<string | null>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    return formData.name !== '' && 
           formData.email !== '' && 
           formData.subject !== '' && 
           formData.message !== '';
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleCaptchaChange = (value:any) => {
//     setCaptcha(value);
//   };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        
        setFormData({ name: '', email: '', subject: '', message: '' });

        router.push("/mail-success");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pb-16 pt-28 md:pt-32 lg:pb-40 lg:pt-36">
        <div className="container relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between lg:space-x-10">
            <div className="mb-12 lg:mb-0 lg:w-full">
            
              <h2 className="relative font-bold text-3xl xl:text-hero mb-10">
                Senden Sie uns eine Nachricht
              </h2>

              <form
                onSubmit={handleSubmit}
              >
               <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name} 
                    onChange={handleInputChange}
                    placeholder="Vor- und Nachname"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke focus-visible:outline-none pb-3.5"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-Mail"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke focus-visible:outline-none pb-3.5"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Betreff"
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke focus-visible:outline-none pt-6 pb-3.5"
                  />
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ihre Nachricht an uns..."
                    className="w-full bg-transparent border-b border-stroke focus-visible:outline-none focus:border-waterloo dark:text-white pt-6 pb-3.5"
                  ></textarea>
                </div>
                
                {/* <ReCAPTCHA className="w-full px-4" sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={handleCaptchaChange} /> */}

                <div className="flex flex-wrap xl:justify-between pt-10">
                  <button disabled={!validateForm() || isSubmitting }
                    className={`inline-flex items-center gap-2.5 bg-primary hover:bg- ease-in-out duration-300 font-medium text-white rounded-md px-6 py-3
                    ${(!validateForm() || isSubmitting ) ? 'cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                      
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
