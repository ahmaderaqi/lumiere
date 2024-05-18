import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import WhatsApp from "@/components/Whatsapp";
export default function Footer() {
  return (
    <footer className="p-6 bg-cyan-300">
      <Container>
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-blue-600"
          >
            <svg
              className="text-blue-600 mr-2 h-8"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths here */}
            </svg>
            Lumière
          </Link>
          <p className="my-4 text-gray-600">
            Your Trusted Translation Solutions Provider
          </p>
          <ul className="flex justify-center items-center mb-6 text-gray-600">
            {/* <li>
              <Link href="#" className="mr-4 hover:text-blue-600">
                Our Partners
              </Link>
            </li> */}
            <li>
              <Link href="/faqs" className="mr-4 hover:text-blue-600">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="mr-4 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
          <WhatsApp phoneNumber="1234567890" message="Hello! I'm interested in your services." />
          <span className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-blue-600">
              Lumière
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
