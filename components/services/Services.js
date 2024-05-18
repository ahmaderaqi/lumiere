import { Card, Col, Row } from "react-bootstrap";
import React from "react";
import Cards from "../Cards/Cards";

function Services() {
  return (
    <div className="pt-10 bg-white pb-4">
      <Row className="gx-4 gy-4">
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Statement of Purpose, Motivational Letter, Cover Letter Writing"
            para="Expert assistance in crafting compelling application documents that showcase your qualifications and aspirations"
            imgg="https://www.sectorlink.com/img/blog/why-are-websites-important.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Translation Services"
            para="Accurate and professional translations to bridge language barriers and ensure clear communication across cultures"
            imgg="https://tarjama.com/wp-content/uploads/2020/03/The-Nonmonetary-Cost-of-Online-Translation-Services-1024x595.jpg"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="English & Spanish Language Courses"
            para="Conversational, beginner, and business-focused courses to cater to various levels and needs"
            imgg="https://plus.unsplash.com/premium_photo-1663039932595-5741498cf45b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFuZ3VhZ2UlMjBjb3Vyc2VzfGVufDB8fDB8fHww"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Interpretation Services"
            para="Seamless communication during meetings, conferences, and other events requiring real-time language interpretation"
            imgg="https://images.unsplash.com/photo-1590248451958-05bf0fa70354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYW5zbGF0aW9ufGVufDB8fDB8fHww"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Tour Guide Services"
            para="Knowledgeable and experienced tour guides to enhance your exploration of the local area and cultural experiences"
            imgg="https://www.lpcentre.com/new_storage/images/posts//TypesOfTourGuides2_1703360225.jpg"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Research Auditing, Translation, Writing"
            para="Comprehensive research support, including auditing, translation, and writing services tailored to your specific needs"
            imgg="https://researchleap.com/wp-content/uploads/2018/03/IJMSBA4.32.1-700x336.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="University Applications"
            para="Our user-friendly platform simplifies the scholarship search and application process, streamlining your journey to academic success"
            imgg="https://therightustorage.blob.core.windows.net/assets/guide/online-university-apply.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Scholarship Hunting Assistance"
            para="We actively connect you with potential scholarships by directly contacting professors and universities, maximizing your chances of securing funding"
            imgg="https://cdn.ramseysolutions.net/media/blog/saving/how-to-save-money-in-college/how-to-find-scholarships-for-college.jpg"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Medical Insurances for Exchange Students"
            para="Access to suitable medical insurance plans, ensuring your health and well-being throughout your academic journey"
            imgg="https://www.applyboard.com/wp-content/uploads/2022/01/health-and-travel-insurance-in-canada.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Finding Accommodations for Newcomers"
            para="Assistance in finding suitable housing options, easing your transition into your new environment"
            imgg="https://www.glasgowunisrc.org/pageassets/advice/accommodation/fearless-flathunting/AdobeStock_452332486.jpeg?thumbnail=true&height=465&width=620&resize_type=CropToFit"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Cards
            name="Transportation from and to the Airport"
            para="Convenient and reliable transportation services to and from the airport, ensuring a smooth arrival and departure"
            imgg="https://www.bestresortspuntacana.com/assets/uploads/system_images/home_wizard5_banner_image20210819090954.jpeg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Services;
