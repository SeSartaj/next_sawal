import { FC } from "react";
import { Locale } from "@/i18n-config";
import PageHeader from "../ui/PageHeader";
import Label from "../ui/Label";

interface UseTermsProps {
  lang: Locale;
  dictionary: any;
}

const UseTerms: FC<UseTermsProps> = ({ lang, dictionary }) => {
  return (
    <div className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8">
      <div>
        <div className="px-4 py-3 md:justify-start">
          <PageHeader
            title="Terms of Use - Takhnik Community Discussion System"
            size={"sm"}
          />
        </div>
        <div className="px-4 py-3 md:justify-start">
          <br />
          <p>
            Welcome to Takhnik, the community discussion system designed to
            empower Afghan students through knowledge sharing and mentorship.
            These Terms of Use outline the guidelines and responsibilities for
            members and moderators using our platform. By accessing or using
            Takhnik, you agree to abide by these terms.
          </p>
          <br />

          <h1 className="custom-heading">1. Membership</h1>
          <p>
            1.1 <Label className="font-bold">Eligibility:</Label> Membership is
            open to individuals who agree to comply with these Terms of Use.
            Users must be at least 13 years of age to create an account.
          </p>
          <p>
            1.2 <Label className="font-bold">Account Information:</Label>{" "}
            Members are responsible for providing accurate and up-to-date
            information during registration. This includes email addresses,
            phone numbers, and profile details.
          </p>
          <br />

          <h1 className="custom-heading">2. Community Participation</h1>
          <p>
            2.1 <Label className="font-bold">Member Activities:</Label> Members
            can ask questions, comment on answers, and engage in discussions
            related to educational topics within the platform.
          </p>
          <p>
            2.2 <Label className="font-bold">Viewing Discussions:</Label> Only
            registered members can view discussions, answers, and moderator
            profiles. This ensures the privacy and security of our community.
          </p>
          <br />

          <h1 className="custom-heading">3. Moderators</h1>
          <p>
            3.1 <Label className="font-bold">Role of Moderators:</Label>{" "}
            Moderators are experienced teachers responsible for providing
            accurate and valuable answers to questions within their area of
            expertise.
          </p>
          <p>
            3.2 <Label className="font-bold">Administrator Oversight:</Label>{" "}
            Administrators have the authority to register moderators, assign
            specific tags to them, and manage their accounts.
          </p>
          <br />

          <h1 className="custom-heading">4. Tags and Tag-Based Search</h1>
          <p>
            4.1 <Label className="font-bold">Tag Creation:</Label>{" "}
            Administrators have the ability to create tags for categorizing
            discussions based on subject matter.
          </p>
          <p>
            4.2 <Label className="font-bold">Moderator Expertise:</Label>{" "}
            Moderators are assigned specific tags based on their expertise. They
            can answer questions within their assigned tags.
          </p>
          <br />

          <h1 className="custom-heading">5. Reporting and Suspension</h1>
          <p>
            5.1 <Label className="font-bold">Report Types:</Label>{" "}
            Administrators have the authority to suspend or unsuspend user
            accounts based on the severity of reported violations.
          </p>
          <p>
            5.2 <Label className="font-bold">User Suspension:</Label>{" "}
            Administrators have the authority to suspend or unsuspend user
            accounts based on the severity of reported violations.
          </p>
          <br />

          <h1 className="custom-heading">6. Privacy and Data Handling</h1>
          <p>
            6.1 <Label className="font-bold">Data Collection:</Label> Takhnik
            collects and handles user data in accordance with our Privacy
            Policy. Users are encouraged to review the policy for more details.
          </p>
          <p>
            6.2 <Label className="font-bold">Security Measures:</Label> Takhnik
            implements security measures to protect user information. However,
            users are responsible for safeguarding their login credentials.
          </p>
          <br />

          <h1 className="custom-heading">7. Intellectual Property</h1>
          <p>
            7.1 <Label className="font-bold">Content Ownership:</Label> Members
            retain ownership of their content posted on Takhnik. By submitting
            content, members grant Takhnik a non-exclusive license to use,
            display, and distribute it.
          </p>
          <br />

          <h1 className="custom-heading">8. Amendments and Updates</h1>
          <p>
            8.1 <Label className="font-bold">Policy Changes:</Label> Takhnik may
            update these Terms of Use from time to time. Users will be notified
            of significant changes.
          </p>
          <br />

          <h1 className="custom-heading">9. Contact Us</h1>
          <p>
            If you have any questions or concerns about these Terms of Use,
            please contact us at{" "}
            <Label className="text-blue-500">contact@email.com</Label>.
          </p>
          <br />
          <p>
            These Terms of Use were last updated on [Date]. Thank you for being
            a part of the Takhnik community!
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default UseTerms;
