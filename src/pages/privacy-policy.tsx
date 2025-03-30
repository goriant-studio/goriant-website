import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Fruit Memory Game" />
      </Head>
      <main className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">
            Privacy Policy
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Matching Pair – Memory Game with Cute Fruit ("we," "our," or "us"). 
              We respect your privacy and are committed to protecting any personal information 
              you may provide while using our application ("App"). This Privacy Policy outlines 
              our practices regarding data collection, usage, and disclosure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Information We Do Not Collect</h2>
            <p className="text-gray-300 mb-4">
              We do not collect, store, or share any personal information from users of this App. 
              Specifically:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Personal Data: We do not request or process any personal identifiers such as names, 
                  email addresses, phone numbers, or physical addresses.</li>
              <li>Sensitive Permissions: Our App does not access or use sensitive device permissions 
                  such as the camera, microphone, location services, or contacts.</li>
              <li>Usage Data: We do not track user behavior, analytics, or any usage patterns within 
                  the App.</li>
              <li>Cookies and Tracking Technologies: Our App does not use cookies or similar tracking 
                  technologies.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              Our App does not integrate with third-party services or platforms that may collect data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Legal Compliance</h2>
            <p className="text-gray-300 leading-relaxed">
              We comply with all applicable privacy laws, including the Children's Online Privacy Protection Act (COPPA). 
              Our App does not collect any personal data, ensuring full compliance with regulations protecting users of all ages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Google Play Services</h2>
            <p className="text-gray-300 leading-relaxed">
              This App uses Google Play Services, which may collect certain device information (e.g., crash logs or anonymized usage data) 
              as part of its standard functionality. Please refer to{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Google's Privacy Policy
              </a>
              {' '}for more details.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This Privacy Policy applies to Fruit Memory Game distributed through the Google Play Store.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our App is designed for users of all ages and does not collect personal information from anyone, 
              including children under the age of 13. We are committed to protecting the privacy of all our users, 
              especially children, and ensure our App is safe and enjoyable for everyone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy or our data 
              practices, please contact us at:
            </p>
            <div className="mt-4 text-gray-300">
              <p className="font-semibold">Goriant Studio</p>
              <p>Email: <a href="mailto:studio@goriant.com" className="text-blue-400 hover:text-blue-300">
                studio@goriant.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy; 