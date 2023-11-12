import { FC } from "react";
import { Locale } from "@/i18n-config";
import PageHeader from "../ui/PageHeader";
import Label from "../ui/Label";

interface PrivacyPolicyProps {
  lang: Locale;
  dictionary: any;
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ lang, dictionary }) => {
  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <PageHeader title="Privacy Policy for Takhnik" size={"sm"} />
        </div>
        <div className="px-4 py-3 md:justify-start space-y-2">
          <br/>
          <h1 className="custom-heading">Privacy Policy for Takhnik</h1>
          <br/>

          <p>
          At Takhnik, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect and how it is used. We are committed to protecting the information you share with us.
          </p>

          <br/>
          <h1 className="custom-heading">Information We Collect</h1>
          <br/>

          <h2 className="custom-subheading">
          1. User Email
          </h2>
          <p>When you sign up for Takhnik, we collect your email address to create and manage your account. We may also use your email to communicate with you regarding important updates, notifications, and promotional offers related to our services.</p>
          <br/>

          <h2 className="custom-subheading">
          2. Phone Number
          </h2>
          <p>In some cases, we may request your phone number for authentication or to provide additional security features. Your phone number will only be used for the purpose it was provided and will not be shared with third parties.</p>
          <br/>

          <h2 className="custom-subheading">
          3. Profile Image
          </h2>
          <p>In some cases, we may request your phone number for authentication or to provide additional security features. Your phone number will only be used for the purpose it was provided and will not be shared with third parties.You have the option to upload a profile image to personalize your account. This image is used solely for identification purposes within our platform and is not shared externally.</p>
          <br/>

          <h2 className="custom-subheading">
          4. Username
          </h2>
          <p>We collect your chosen username to create a unique identifier for your account. This username will be visible to other users within the platform.</p>
          <br/>

          <br/>
          <h1 className="custom-heading">How We Use Your Information</h1>
          <br/>

          <h2 className="custom-subheading">
          1. Account Management
          </h2>
          <p>We use your email address and username to create and manage your account. This includes authentication, password recovery, and account-related communications.</p>
          <br/>

          <h2 className="custom-subheading">
          2. Communication
          </h2>
          <p>We may use your email address or phone number to send you important notifications, updates, and information about our services. You may choose to opt out of promotional emails.</p>
          <br/>

          <h2 className="custom-subheading">
          3. Security
          </h2>
          <p>Your phone number may be used for additional security measures, such as two-factor authentication, to help protect your account.</p>
          <br/>

          <h2 className="custom-subheading">
          4. Personalization
          </h2>
          <p>Your profile image and username are used to personalize your experience within the platform, making it easier for other users to identify and connect with you.</p>
          <br/>

          <h1 className="custom-heading">Data Security</h1>
          <p>We take data security seriously and have implemented measures to safeguard your information. This includes encryption, secure storage practices, and access controls.</p>
          <br/>

          <h1 className="custom-heading">Sharing of Information</h1>
          <p>We do not sell, trade, or otherwise transfer your personal information to external parties. Your information is only accessible to authorized personnel for the purposes outlined in this Privacy Policy.</p>
          <br/>

          <h1 className="custom-heading">Third-Party Services</h1>
          <p>In some cases, we may utilize third-party services for specific functionalities within our platform. These services have their own privacy policies and practices, which we encourage you to review.</p>
          <br/>

          <h1 className="custom-heading">Your Rights</h1>
          <p>You have the right to access, update, or delete your personal information. If you have any questions or requests regarding your data, please contact us at <Label className="text-blue-500">contact@email.com</Label>.</p>
          <br/>

          <h1 className="custom-heading">Changes to This Policy</h1>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. We will notify you of any significant updates.</p>
          <br/>

          <h1 className="custom-heading">Contact Us</h1>
          <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <Label className="text-blue-500">contact@email.com</Label>.</p>
          <br/>

          <p>This Privacy Policy was last updated on [Date].</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
