import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Next Level Partners",
  description: "Privacy policy for Next Level Partners website.",
};

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="heading-1 mb-8">Privacy Policy</h1>

          <p className="text-neutral-gray mb-6">
            Last updated: January 2026
          </p>

          <h2 className="heading-3 mt-8 mb-4">Information We Collect</h2>
          <p className="text-neutral-gray mb-4">
            When you visit our website or contact us, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-neutral-gray mb-6 space-y-2">
            <li>Name and email address when you submit a contact form</li>
            <li>Company name and role</li>
            <li>Information you provide in your messages to us</li>
            <li>Usage data through analytics tools</li>
          </ul>

          <h2 className="heading-3 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-neutral-gray mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-neutral-gray mb-6 space-y-2">
            <li>Respond to your inquiries</li>
            <li>Schedule and conduct discovery calls</li>
            <li>Send you relevant updates if you've subscribed to our newsletter</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="heading-3 mt-8 mb-4">Data Protection</h2>
          <p className="text-neutral-gray mb-6">
            We take reasonable measures to protect your personal information from unauthorized
            access, use, or disclosure. We do not sell or share your personal information with
            third parties for marketing purposes.
          </p>

          <h2 className="heading-3 mt-8 mb-4">Cookies</h2>
          <p className="text-neutral-gray mb-6">
            Our website may use cookies to enhance your browsing experience. You can choose to
            disable cookies through your browser settings.
          </p>

          <h2 className="heading-3 mt-8 mb-4">Your Rights</h2>
          <p className="text-neutral-gray mb-6">
            You have the right to access, correct, or delete your personal information.
            To exercise these rights, please contact us at jason@next-levelpartners.com.
          </p>

          <h2 className="heading-3 mt-8 mb-4">Contact Us</h2>
          <p className="text-neutral-gray mb-6">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-neutral-gray">
            <strong>Email:</strong> jason@next-levelpartners.com
          </p>
        </div>
      </div>
    </section>
  );
}
