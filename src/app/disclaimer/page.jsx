// app/disclaimer/page.jsx
import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Disclaimer = () => {
    return (
        <>
            <Nav />
            <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold my-8 text-primary w-full md:w-[70%] mx-auto">   DISCLAIMER </h1>
            <div className="max-w-4xl mx-auto px-7 py-10 bg-gray-50 rounded-lg shadow-md mb-10 ">


                <p className="text-gray-700 leading-relaxed">
                    <strong>Effective Date:</strong> [Insert Date] <br />
                    <strong>Last Updated:</strong> [Insert Date]
                </p>

                {/* Recitals */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">RECITALS</h2>
                    <p className="text-gray-700 leading-relaxed">
                        <span className="font-bold">
                            WHEREAS</span>, Formative Global Service Ltd. (“EAZYiPASS”, “we”, “our” or “us”) operates an online and mobile platform (the “Platform”), consisting of the Website, Application, and related Services, designed to facilitate access to Tutorials, Events, campus navigation, and opportunities for Students in Nigerian universities and beyond; <br />
                        <span className="font-bold">WHEREAS</span>, the Platform acts solely as an intermediary to connect Students, Tutors, and Event Partners, and does not provide educational, professional, or advisory services in its own capacity; <br />
                        <span className="font-bold">WHEREAS</span>, EAZYiPASS desires to limit its liability to the maximum extent permissible by law and to set forth the responsibilities and risks borne by Users of the Platform; <br />
                        <span className="font-bold">NOW THEREFORE</span>, the following Disclaimer shall apply to all access to, and use of, the Platform. By using the Platform, you acknowledge that you have read, understood, and agreed to the terms set forth herein.
                    </p>
                </section>

                {/* Section 1 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">1. GENERAL INFORMATION</h2>
                    <ul className="list-decimal list-outside text-gray-700 space-y-2 pl-4  ">
                        <li>The Platform and all Services are provided strictly on an “as-is” and “as-available” basis.</li>
                        <li>No warranty, representation, or guarantee, express or implied, is given regarding the completeness, correctness, or suitability of the Services.</li>
                        <li>Users access and use the Platform at their sole risk.</li>
                    </ul>
                </section>

                {/* Section 2 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">2. NO PROFESSIONAL OR ACADEMIC ADVICE</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4 ">
                        <li>The Platform does not provide professional, academic, financial, legal, or career advice.</li>
                        <li>All Tutorials and Events are provided by independent Tutors and Event Partners who act in their own capacity as third-party contractors.</li>
                        <li>EAZYiPASS makes no representation or warranty as to the competence, qualifications, accuracy, or reliability of any Tutor or Event Partner. Students are encouraged to conduct their own due diligence before engaging such services.</li>
                    </ul>
                </section>

                {/* Section 3 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">3. PLATFORM FUNCTIONALITY AND LIMITATIONS</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>The Platform may not be error-free, uninterrupted, secure, or free from malware, viruses, or other harmful code.</li>
                        <li>Access may be suspended or withdrawn without prior notice due to upgrades, maintenance, failures, or circumstances beyond our reasonable control.</li>
                        <li>EAZYiPASS shall not be liable for:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>any delay, failure, or inability to access the Platform;</li>
                                <li>any data loss, corruption, or unauthorised access arising from use of the Platform; or</li>
                                <li>incompatibility of the Platform with any hardware, software, or operating system.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Section 4 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">4. USER RESPONSIBILITIES</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>Users are solely responsible for the accuracy, lawfulness, and reliability of all Content uploaded or transmitted through the Platform.</li>
                        <li>Users remain responsible for verifying the credentials of Tutors, the authenticity of Events, and the reliability of opportunities advertised.</li>
                        <li>Any reliance placed on information or services obtained via the Platform shall be entirely at the User’s risk.</li>
                    </ul>
                </section>

                {/* Section 5 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">5. THIRD-PARTY SERVICES AND LINKS</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>The Platform may contain links to third-party websites, applications, or services.</li>
                        <li>Such links are provided for convenience only and shall not be construed as an endorsement, partnership, or guarantee by EAZYiPASS.</li>
                        <li>Users acknowledge that third-party websites and services are governed by their own terms and policies, and EAZYiPASS accepts no responsibility or liability arising therefrom.</li>
                    </ul>
                </section>

                {/* Section 6 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">6. INDEPENDENT STATUS OF USERS</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>Tutors and Event Partners are independent contractors and are not employees, partners, agents, or representatives of EAZYiPASS.</li>
                        <li>Nothing on the Platform shall create or be deemed to create any employment, joint venture, agency, or fiduciary relationship between EAZYiPASS and any User.</li>
                    </ul>
                </section>

                {/* Section 7 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">7. LIMITATION OF LIABILITY</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>To the maximum extent permitted by applicable law, EAZYiPASS disclaims all liability for indirect, incidental, consequential, punitive, or exemplary damages, including but not limited to:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>loss of profits, revenues, or anticipated savings;</li>
                                <li>loss of goodwill or business reputation;</li>
                                <li>loss of data;</li>
                                <li>personal injury or property damage arising from use of the Platform.</li>
                            </ul>
                        </li>
                        <li>The total aggregate liability of EAZYiPASS to any User shall not exceed the greater of:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>the total amount of fees actually paid by such User to EAZYiPASS in the three (3) months preceding the claim; or</li>
                                <li>[Insert alternative limit if applicable]</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Section 8 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">8. INDEMNITY</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>Users agree to indemnify, defend, and hold harmless EAZYiPASS, its directors, officers, employees, contractors, and affiliates from and against all claims, actions, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or related to:
                            <ul className="list-disc pl-5 mt-1 space-y-1">
                                <li>The User’s access to or use of the Platform;</li>
                                <li>Breaches of these terms or applicable law;</li>
                                <li>Content submitted or transmitted by the User; or</li>
                                <li>Disputes with other Users, Tutors, or Event Partners.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Section 9 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">9. FORCE MAJEURE</h2>
                    <p className="text-gray-700 leading-relaxed pl-4">
                        EAZYiPASS shall not be liable for any failure or delay in performance resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disasters, strikes, governmental actions, pandemics, power outages, or telecommunications failures.
                    </p>
                </section>

                {/* Section 10 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">10. NO GUARANTEE OF OUTCOME</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>EAZYiPASS does not guarantee the achievement of any academic, professional, or personal results from use of the Platform.</li>
                        <li>Success in Tutorials, Events, or opportunities advertised remains dependent on the User’s personal effort, diligence, and external factors beyond EAZYiPASS’ control.</li>
                    </ul>
                </section>

                {/* Section 11 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">11. GOVERNING LAW AND JURISDICTION</h2>
                    <ul className="list-decimal list-inside text-gray-700 space-y-2 pl-4">
                        <li>This Disclaimer shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.</li>
                        <li>The courts of Nigeria shall have exclusive jurisdiction over any dispute or claim arising from or in connection with this Disclaimer or the use of the Platform.</li>
                    </ul>
                </section>

                {/* Section 12 */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold pt-6  text-primary">12. CONTACT INFORMATION</h2>
                    <p className="text-gray-700 leading-relaxed pl-4">
                        For questions, clarifications, or complaints regarding this Disclaimer, please contact: <br /><br />
                        <strong>Formative Global Service Ltd.</strong> <br />
                        No. 72, Ogunride Street, Mosholashi, Lagos State, Nigeria <br />
                        Email: obi.lawman@yahoo.com <br />
                        Phone: (+234) 901 687 2733; +44 7897 918839
                    </p>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Disclaimer;
