export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg text-custom-background">
      <h1 className="text-3xl font-bold text-center mb-6 text-custom-background">
        Privacy Policy
      </h1>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-row  items-center">
            <h2 className="text-2xl font-semibold text-custom-background">
              Privacy Policy for Applete
            </h2>
            <img src="/applete-icon.png" width={28} height={28} />
          </div>
          <div className="text-gray-600">
            <p>Updated at: October 23, 2024</p>
            <p>Effective Date: December 31, 2025</p>
          </div>
        </div>

        <p className="text-gray-700">
          At Applete, we prioritize the privacy of our users. This privacy
          policy outlines how we collect, use, and safeguard your personal
          information when you use our app, Applete, available in the
          Philippines.
        </p>

        <div>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>

          <h3 className="text-lg font-medium mt-4">Personal Information:</h3>
          <p className="text-gray-700">
            We collect personal information, including your name, email address,
            phone number, and other contact details, when you interact with the
            app.
          </p>

          <h3 className="text-lg font-medium mt-4">Usage Data:</h3>
          <p className="text-gray-700">
            We collect information on how you interact with our app, such as IP
            address, device type, browser type, and operating system. This data
            is collected using cookies, local storage, and other tracking
            technologies to improve your app experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To provide and maintain app services.</li>
            <li>
              To send newsletters and promotional materials if you opt-in.
            </li>
            <li>
              To monitor and analyze trends and app activity using digital
              analytics tools (e.g., Google Analytics).
            </li>
            <li>To serve relevant ads within the app.</li>
            <li>To process online payments securely.</li>
            <li>
              To provide services requiring Geolocation, Camera Access, and
              Photo Gallery Access.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            3. Newsletter and Email Communications
          </h2>
          <p className="text-gray-700">
            With your consent, we may use your email address to send
            newsletters, promotional offers, and updates. You can opt-out at any
            time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            4. Cookies, Local Storage, and Tracking Technologies
          </h2>
          <p className="text-gray-700">
            We use cookies, local storage, and tools like Google Maps APIs to
            track your usage and improve your experience. These technologies
            help us optimize app functionality and provide tailored services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Advertising</h2>
          <p className="text-gray-700">
            Our app includes advertisements, and we may use tracking
            technologies to serve relevant ads to users.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. Use of Tracking Software</h2>
          <p className="text-gray-700">
            We use digital analytics tools, including Google Analytics, to
            monitor user behavior and improve app functionality. We also use
            Google Maps APIs for location-based features.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">7. Online Payments</h2>
          <p className="text-gray-700">
            We accept online payments through the app. Your payment information
            is processed securely, and we do not store credit card details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            8. Geolocation, Camera, and Gallery Access
          </h2>
          <p className="text-gray-700">
            Our app uses Geolocation services, Camera Access, and Photo Gallery
            Access to enhance app functionality, enabling features like
            location-based services and media uploads.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">9. Data Security</h2>
          <p className="text-gray-700">
            We implement security measures to ensure the protection of your
            personal data. However, no method of data transmission is 100%
            secure. We strive to protect your information, but we cannot
            guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">10. Age Restrictions</h2>
          <p className="text-gray-700">
            Our app is not intended for use by individuals under the age of 13.
            We do not knowingly collect personal information from children under
            13.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">11. Third-Party Links</h2>
          <p className="text-gray-700">
            Our app may contain links to external sites not operated by us. We
            have no control over the content and privacy policies of these
            third-party sites. We advise you to review their privacy policies
            before providing any information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            12. Changes to this Privacy Policy
          </h2>
          <p className="text-gray-700">
            We reserve the right to modify this privacy policy at any time. Any
            changes will be posted on this page, and the effective date will be
            updated accordingly. Please check back periodically for updates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">13. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this privacy policy, please contact
            us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Email:{" "}
              <a
                href="mailto:codebility.dev@gmail.com"
                className="text-blue-600 hover:underline"
              >
                codebility.dev@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+639210900799"
                className="text-blue-600 hover:underline"
              >
                0921 090 0799
              </a>
            </li>
            <li>
              Mail: Unit 1204, Discovery Suites, 25 ADB Avenue, San Antonio,
              Pasig, Philippines
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
