import React from 'react';
import './PrivacyContent.scss';

const PrivacyContent = () => {
  return (
    <section className='container max-w-[95%] md:max-w-[85%] mx-auto px-4 px-md-0  py-24 privacy-content'>
      <article>
        <h4>Introduction</h4>
        <p>
          At Wagmi11, we deeply respect your privacy and are committed to
          safeguarding your personal information. Our approach to privacy is
          transparent and straightforward.
        </p>
      </article>
      <article>
        <h4>Information Collection and Usage</h4>
        <p>
          Wagmi11 collects minimal data necessary to provide our services
          effectively. We do not require any personal information, not even your
          name, to use our service. The information we gather is used for the
          following purposes:
        </p>
        <ul>
          <li>To improve our services and user experience.</li>
          <li>
            To fulfil your service requests and communicate important updates.
          </li>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>
            To personalise and enhance our services based on your preferences.
          </li>
        </ul>
      </article>
      <article>
        <h4>Information Sharing</h4>
        <p>
          Your privacy is our priority. We only share your information under
          specific circumstances:
        </p>
        <ul>
          <li>
            Service Providers: We may share data with trusted service providers
            to deliver our services effectively.
          </li>
          <li>
            To fulfil your service requests and communicate important updates.
          </li>
          <li>
            Legal Compliance: If required by law, we may disclose your
            information to comply with legal obligations.
          </li>
          <li>
            User Consent: We may share your data if you have given us specific
            consent to do so.
          </li>
        </ul>
      </article>
      <article>
        <h4>Third-Party Analytics</h4>
        <p>
          Wagmi11 employs third-party analytics services to better understand
          user behavior and enhance our offerings. These services use
          technologies like cookies to collect data such as IP addresses and
          page views. Please review the privacy policies of these third parties
          for detailed information on their practices.
        </p>
      </article>
      <article>
        <h4>Data Security</h4>
        <p>
          We take stringent measures to safeguard your information from
          unauthorized access, disclosure, alteration, and destruction. Your
          data is stored securely and accessed only by authorized personnel.
        </p>
      </article>
      <article>
        <h4>Changes to Privacy Policy</h4>
        <p>
          We may update this privacy policy periodically to reflect changes in
          our practices. Any revisions will be effective immediately and will be
          indicated by revising the date at the bottom of this policy.
        </p>
        <p>
          By using Wagmi11's services, you consent to the collection and
          processing of your information as outlined in this privacy policy.
        </p>
        <p>
          For further queries or concerns about our privacy practices, please
          contact us at <a href="mailto:ajay@wagmi11.com" className='underline'>ajay@wagmi11.com</a>
        </p>
      </article>
    </section>
  );
};

export default PrivacyContent;
