// app/privacy-policy/page.jsx (Next.js 13+ with app directory)
import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const privacyPolicy = () => {

  return (
    <>
      <Nav />
      <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold my-8 text-primary w-full md:w-[70%] mx-auto">EAZYiPASS PRIVACY POLICY AND PERSONAL DATA MANAGEMENT POLICY</h1>
      <div className="max-w-4xl mx-auto px-7 py-10 bg-gray-50 rounded-lg shadow-md mb-10">
        <p className="text-justify text-gray-700 leading-relaxed">
          This Privacy Policy (“Policy”) sets out the principles and practices governing the collection, use, processing, disclosure, retention, and protection of Personal Data in connection with the use of the EAZYiPASS Application (“EAZYiPASS” or the “App”) and related services provided by Formative Global Service Ltd. (“the Company”, “we”, “our”, or “us”).
          By downloading, installing, registering, or using EAZYiPASS, you (“User” or “you”) acknowledge that you have read, understood, and agreed to the terms of this Policy.
          This Policy is intended to comply with applicable laws and regulations, including but not limited to the Nigeria Data Protection Regulation (NDPR) 2019, the Nigeria Data Protection Act 2023, and relevant global standards such as the General Data Protection Regulation (GDPR) where applicable.

        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">1. Definitions</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          For the purposes of this Policy:
          <br />
          1.1 “Personal Data” means any information relating to an identified or identifiable natural person, including but not limited to name, student number, email address, phone number, academic details, and any other information collected through the App.
          <br />
          1.2 “Processing” means any operation or set of operations performed on Personal Data, such as collection, recording, organisation, structuring, storage, alteration, retrieval, use, disclosure, dissemination, alignment, combination, restriction, erasure, or destruction.
          <br />
          1.3 “Controller” means Formative Global Service Ltd., which determines the purposes and means of the Processing of Personal Data.
          <br />
          1.4 “Processor” means any third party, including the Developers engaged by the Company, who Processes Personal Data on behalf of the Controller.
          <br />
          1.5 “Services” means all functions provided by the App, including campus navigation, booking of tutorials, booking of events, and access to career and study opportunities.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">2. Scope of this Policy</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          2.1 This Policy applies to all Users of EAZYiPASS and governs all Personal Data collected, stored, and processed in relation to their use of the App.
          <br />
          2.2 This Policy also extends to all third-party Developers, employees, contractors, and service providers who may Process Personal Data in connection with the Services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">3. Legal Basis for Processing</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          3.1 Personal Data shall only be processed lawfully, fairly, and transparently.
          <br />
          3.2 The legal bases for Processing shall include:
          <br />
          (a) the necessity of Processing for the performance of a contract between the User and the Company;
          <br />
          (b) compliance with legal obligations;
          <br />
          (c) protection of vital interests of the User;
          <br />
          (d) the performance of tasks carried out in the public interest; and
          <br />
          (e) legitimate interests pursued by the Company, provided such interests do not override the fundamental rights and freedoms of the User.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">4. Collection of Personal Data</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          4.1 The Company may collect Personal Data directly from Users, including but not limited to:
          <br />
          •	Name, email, phone number, and university affiliation during account registration;
          <br />
          •	Geolocation data for campus navigation;
          <br />
          •	Booking details for tutorials, events, or other activities;
          <br />
          •	Academic and career preferences where Users opt-in for opportunities.
          <br />
          4.2 The Company may also collect Personal Data indirectly from third-party integrations, such as payment processors (Paystack), communication tools (Zoom), or analytics services (Google Firebase) or any other such integrations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">5. Purpose of Processing Personal Data</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          5.1 Personal Data shall be collected and processed strictly for the following purposes:
          <br />
          (a) To provide, personalise, and improve the Services offered by EAZYiPASS;
          <br />
          (b) To facilitate bookings of tutorials, events, and activities;
          <br />
          (c) To provide Users with access to academic, career, and study opportunities;
          <br />
          (d) To process payments and manage transactions securely;
          <br />
          (e) To ensure the safety, integrity, and functionality of the App; and
          <br />
          (f) To comply with regulatory obligations.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">6. Obligations of Developers and Processors</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          6.1 The Developers and any Processors engaged by the Company:
          <br />
          (a) shall only process Personal Data in line with documented instructions for the achievement of the contract objectives;
          <br />
          (b) undertake to maintain the utmost confidentiality in relation to all Personal Data;
          <br />
          (c) shall, at the termination of the contract, return to the Company all Personal Data and delete existing copies unless otherwise required by law;
          <br />
          (d) shall provide all necessary information to demonstrate compliance with this Policy and applicable laws and shall allow for audits or inspections conducted by the Company or its appointed auditor;
          <br />
          (e) undertake that their collection, use, and sharing of data shall be in strict compliance with the NDPR, NDPA 2023, and all other applicable laws; and
          <br />
          (f) shall file a mandatory Data Processing Declaration with the Nigerian Data Protection Commission (NDPC), in accordance with the NDPR.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">7. User Rights</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          7.1 In accordance with applicable laws, Users have the following rights:
          <br />
          (a) The right to access Personal Data held about them;
          <br />  
          (b) The right to request rectification of inaccurate or incomplete Personal Data;
          <br />
          (c) The right to request erasure of Personal Data (“right to be forgotten”);
          <br />
          (d) The right to restrict or object to the Processing of their Personal Data;
          <br />
          (e) The right to data portability, to receive Personal Data in a structured, commonly used, and machine-readable format;
          <br />
          (f) The right to withdraw consent at any time, without affecting the lawfulness of Processing carried out prior to withdrawal; and
          <br />
          (g) The right to lodge a complaint with the Nigerian Data Protection Commission (NDPC) or any other competent authority.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">8. Data Retention</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          8.1 Personal Data shall not be retained for longer than is necessary to fulfil the purposes for which it was collected.
          <br />
          8.2 Upon deactivation of an account or termination of Services, Personal Data shall be deleted or anonymised, unless retention is required by law, regulation, or for legitimate business purposes.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">9. Security of Data</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          9.1 The Company shall implement appropriate technical and organisational measures to ensure the security, confidentiality, and integrity of Personal Data.
          <br />
          9.2 Such measures shall include, but not be limited to, encryption, access controls, pseudonymisation, regular vulnerability testing, and staff training.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">10. Third-Party Services</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          10.1 The Company may engage third-party service providers to facilitate Services, including but not limited to:
          <br />
          •	Paystack (payment processing);
          <br />
          •	Zoom (virtual tutorials and events);
          <br />
          •	Google Firebase (data analytics and backend services).
          <br />
          10.2 Users are encouraged to review the privacy policies of such third parties, as the Company shall not be liable for the practices of third parties beyond its reasonable control.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">11. International Transfers of Data</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          11.1 Where Personal Data is transferred outside Nigeria, the Company shall ensure that such transfers comply with applicable data protection laws, including the requirement for adequate safeguards.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">12. Cookies and Tracking Technologies</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          12.1 The App may use cookies and similar technologies to enhance User experience, analyse usage, and deliver personalised content.
          <br />
          12.2 Users may disable cookies via their device settings, but certain features of the App may not function properly without them.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">13. Amendments to this Policy</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          13.1 The Company reserves the right to amend this Policy from time to time.
          <br />
          13.2 Users shall be notified of material changes through the App, email, or other appropriate channels. Continued use of the Services after notification shall constitute acceptance of the revised Policy.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">14. Contact Information</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          All inquiries, complaints, or requests relating to this Policy should be directed to:
          <br />
          Data Protection Officer
          <br />
          Formative Global Service Ltd.
          <br />
          No. 72, Ogunride Street, Mosholashi, Lagos State, Nigeria
          <br />
          Email: dpo@formativeglobal.com
          <br />
          Phone: (+234) 901 687 2733; +44 7897 918839
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary">15. Governing Law and Jurisdiction</h2>
        <p className="text-justify text-gray-700 leading-relaxed pl-4">
          15.1 This Policy shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          <br />
          15.2 Any disputes arising in relation to this Policy shall be subject to the exclusive jurisdiction of the courts of the Federal Republic of Nigeria.
        </p>  
      </div>
      <Footer />
    </>
  );
};

export default privacyPolicy;
