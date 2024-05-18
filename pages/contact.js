import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Layout from "@/components/layout/layout";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4lt83pc",
        "template_i2v68tj",
        form.current,
        "_gqV97b3UEOJSfqE-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formBackgroundStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/1418045846/photo/email-phone-website-contact-us-website-banner-marketing.webp?b=1&s=170667a&w=0&k=20&c=Ln3XGXD1qDcQOu5igbrB7TY2_T-pOI2lGy0y-RHu87Y")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
          style={formBackgroundStyle}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            We invite you to schedule a meeting to discuss how Lumière can best
            support your organization and its objectives. We are confident that
            our services can make a positive impact on your initiatives and the
            lives of individuals you serve
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label
                htmlFor="from_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="user_email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              />
            </div>
            <input
              type="submit"
              value="Send"
              className="bg-black py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            />
          </form>
        </div>
      </section>
    </Layout>
  );
}

// import React, { useState } from "react";

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     service: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert("Form submitted successfully!");
//         // Reset form fields
//         setFormData({
//           fullName: "",
//           service: "",
//           phoneNumber: "",
//           email: "",
//         });
//       } else {
//         alert("Failed to submit form.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Service:
//           <input
//             type="text"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Phone Number:
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormComponent;
