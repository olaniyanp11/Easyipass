// app/terms-and-conditions/page.jsx
import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Nav />
      <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold my-8 text-primary w-full md:w-[70%] mx-auto">
        EAZYiPASS TERMS AND CONDITIONS OF USE
      </h1>
      <div className="max-w-4xl mx-auto px-7 py-10 bg-gray-50 rounded-lg shadow-md mb-10">
        <p className="text-justify text-gray-700 leading-relaxed">
          Effective Date: [Insert Date]
          <br />
          Last Updated: [Insert Date]
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">1. Definitions</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          In these Terms and Conditions (“T&Cs”), the following expressions shall have the meanings set against them:
          <br />
          • “Account” means a personalised and dedicated profile created by a User on the Platform.
          <br />
          • “Application” means the EAZYiPASS mobile app available on iOS and Android.
          <br />
          • “Booking” means a reservation of a Tutorial or Event completed by a Student.
          <br />
          • “Content” means any information, text, images, audio, video, documents, messages, feedback, ratings, reviews, data or other material uploaded or transmitted by a User.
          <br />
          • “Customer” or “Student” means a consumer or end-user using the Platform to book Tutorials or Events.
          <br />
          • “Tutor” means a registered provider of tutorial or academic support services.
          <br />
          • “Event Partner” means an organisation registered to publish or deliver Events through the Platform.
          <br />
          • “Platform” means the EAZYiPASS website and app.
          <br />
          • “Services” or “EAZYiPASS Services” means all services provided by EAZYiPASS, including bookings, scheduling, messaging, payment facilitation, and support.
          <br />
          • “User” means any Student, Tutor, Event Partner, or visitor accessing the Platform.
          <br />
          • “Website” means the EAZYiPASS website at [insert URL].
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">2. Purpose, Scope and Legal Relationship</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          EAZYiPASS operates the Platform as a digital intermediary facilitating Tutorials and Events. The Platform does not provide Tutorials or deliver Events directly; the contractual relationship exists between the Student and the Tutor/Event Partner. By using the Platform or creating an Account, Users agree to these T&Cs.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">3. Contact and Customer Support</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Users may contact EAZYiPASS by email at [support@[domain]] or by post to [registered address]. Support is also available via in-app chat.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">4. Registration, Eligibility and Acceptance of T&Cs</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Users must provide accurate information during registration. Students under 18 require parental consent. Acceptance occurs when ticking “I accept the Terms and Conditions” during registration.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">5. Partner Onboarding Requirements</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Tutors and Event Partners must undergo verification, including identity and qualification checks. EAZYiPASS may decline or deactivate accounts at its discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">6. Account Access, Security and Use</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Users are responsible for securing their credentials. Accounts are personal and non-transferable.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">7. Development, Availability and Modification of Services</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          EAZYiPASS may introduce new features, conduct maintenance, and modify Services. Material changes will be communicated to Users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">8. Bookings, Cancellations and Payments</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Bookings are confirmed when accepted by Tutors/Event Partners. Students may cancel or reschedule according to platform rules. Payments are processed through third-party services, with EAZYiPASS deducting applicable fees.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">9. User Conduct and Content</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Users must comply with laws, avoid unlawful or harmful content, and use the Platform fairly. Intellectual property remains with EAZYiPASS or licensors.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">10. Data Protection, Privacy and Security</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          EAZYiPASS complies with the NDPR 2019 and NDPA 2023. Personal data is processed securely and only for specified purposes. Users’ rights are outlined in the Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">11. Restrictions, Suspension and Termination</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          Accounts may be restricted, suspended, or terminated for violations, repeated cancellations, poor ratings, or fraudulent activities. Users may terminate their Account anytime with written notice.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">12. Liability, Indemnity and Force Majeure</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          EAZYiPASS is not liable for losses caused by Tutors, Event Partners, Students, or external events. Users indemnify EAZYiPASS against claims arising from T&Cs violations or Content uploaded. Neither party is liable for delays or failures due to force majeure events.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">13. Governing Law, Dispute Resolution and Changes</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          These T&Cs are governed by Nigerian law. Disputes should be resolved amicably or by arbitration in Lagos. EAZYiPASS may update T&Cs, with continued use constituting acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">Acknowledgement</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          By creating an Account, completing a Booking, or using the Platform, you confirm that you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
