import { FC } from "react";
import { Locale } from "@/i18n-config";
import PageHeader from "../ui/PageHeader";

interface AboutProps {
  lang: Locale;
  dictionary: any;
}

const About: FC<AboutProps> = ({ lang, dictionary }) => {
  const dir = lang === "en" ? "ltr" : "rtl";

  return (
    <div
      className="flex-col space-y-3 justify-between mx-auto lg:max-w-7xl md:justify-start md:px-8"
      dir={dir}
    >
      <div>
        <div className="px-4 py-3 md:justify-start">
          <PageHeader
            title="Empowering Afghan Students: Takhnik - A Community Discussion System"
            size={"sm"}
          />
        </div>
        <div className="px-4 py-3 md:justify-start">
          <p>
            In a time of global connectivity, the importance of education and
            access to quality information cannot be overstated. With the advent
            of technology, creating platforms that foster learning, discussion,
            and mentorship has become an essential aspect of education
            worldwide. In Afghanistan, where educational resources may be
            limited, such a platform can be a game-changer. Enter Takhnik, a
            community discussion system designed to serve students across the
            country.
          </p>
          <br />
          <h1 className="custom-heading">Bridging Knowledge Gaps</h1>
          <br />
          <h2 className="custom-subheading">
            A Platform Tailored for Afghan Students
          </h2>

          <p>
            Takhnik is a specialized community discussion system crafted with
            the unique needs of Afghan students in mind. Its mission is to
            provide a space where students can come together to seek answers,
            share knowledge, and engage in constructive discussions.
          </p>
          <br />
          <h2 className="custom-subheading">Moderator-Driven Expertise</h2>

          <p>
            At the heart of Takhnik are the moderators, who play a crucial role
            in maintaining the quality and relevance of discussions. These
            moderators are experienced teachers chosen for their subject
            expertise. They act as guides, ensuring that questions are answered
            effectively and accurately.
          </p>
          <br />
          <h2 className="custom-subheading">Tags for Precision</h2>

          <p>
            To streamline the process, each question is associated with specific
            tags that indicate the subject matter. These tags are meticulously
            assigned by the administrators, ensuring that questions find their
            way to the right moderators.
          </p>
          <br />
          <h2 className="custom-subheading">Empowering Moderators</h2>

          <p>
            With carefully assigned tags, moderators gain the ability to address
            questions that fall within their areas of expertise. This
            specialization ensures that students receive accurate and detailed
            responses to their inquiries.
          </p>
          <br />
          <h1 className="custom-heading">The Takhnik Experience</h1>
          <br />
          <h2 className="custom-subheading">Submitting Questions</h2>

          <p>
            Students can submit questions through the user-friendly interface.
            By adding relevant tags, they help direct their question to the
            appropriate moderators, ensuring a prompt and accurate response.
          </p>
          <br />
          <h2 className="custom-subheading">Moderators at Work</h2>

          <p>
            Upon receiving a question, the system identifies moderators with
            matching tags. These moderators are then notified of the new
            question, allowing them to respond promptly.
          </p>
          <br />
          <h2 className="custom-subheading">Fostering a Learning Community</h2>

          <p>
            Through the collaborative efforts of students and moderators,
            Takhnik aims to cultivate a vibrant learning community. Discussions
            not only address immediate queries but also contribute to a growing
            repository of knowledge accessible to all.
          </p>
          <br />
          <h1 className="custom-heading">The Vision for Takhnik</h1>
          <br />
          <h2 className="custom-subheading">Expanding Access</h2>

          <p>
            The ultimate vision for Takhnik is to extend its reach, making
            quality education and mentorship accessible to students in even the
            most remote regions of Afghanistan. Through partnerships with
            educational institutions and organizations, Takhnik aims to connect
            with a wider audience.
          </p>
          <br />
          <h2 className="custom-subheading">Building a Knowledge Hub</h2>

          <p>
            As discussions and interactions flourish, Takhnik aspires to evolve
            into a comprehensive knowledge hub. Here, students can find
            resources, articles, and tutorials that supplement their learning
            journeys.
          </p>
          <br />
          <h2 className="custom-subheading">Empowering the Next Generation</h2>

          <p>
            By providing a platform where students can ask questions, learn from
            experts, and engage with peers, Takhnik empowers the next generation
            of Afghan leaders, thinkers, and change-makers.
          </p>
          <br />
          <h1 className="custom-heading">Conclusion</h1>

          <p>
            Takhnik stands as a beacon of hope and opportunity for Afghan
            students, bridging gaps in education and providing a space for
            learning and growth. With its dedicated moderators, thoughtful
            tagging system, and commitment to accessibility, Takhnik is poised
            to make a lasting impact on the educational landscape of
            Afghanistan. Together, we can build a brighter future for Afghan
            students, one question at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
