import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sparsh",
  lastName: "Mishra",
  name: `Sparsh Mishra`,
  role: "Mathematician & Developer", // TODO
  avatar: "/images/profile.jpg", // TODO
  email: "avidunable@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Creative intuition. Mathematical precision. A newsletter at the crossroads of both.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/msparsh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/msparsh/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

// TODO
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Work In Progress. Mathematical Precision. Architected Intelligence.</>, // TODO
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong> <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()}, and a student at{" "}
      <Text as="span" size="xl" weight="strong">
        IIT Gandhinagar
      </Text>
      . I construct streamlined, highly structured architectures, focusing on the space where advanced code mechanics meet adaptive software to power high-performance technology.
    </>
  ),
};

// TODO
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} bridges advanced mathematics and artificial intelligence. With a foundation in algorithm design and logical architecture, his work explores the space
        where data meets intuitive digital experiences.
        <br />
        <br />
        Away from code, he immerses himself in reading, writing, and music, finding they bring vital clarity, perspective, and articulation to his technical execution.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nyasa, IIT Gandhinagar",
        timeframe: "May 2026 - Present",
        role: "Organizing Member",
        achievements: [
          <>Drive initiatives across the outreach, website, and editorial teams to foster community engagement.</>,
          <>Focus on clear communication and structuring information to elevate the organization's digital presence.</>,
        ],
        images: [],
      },
      {
        company: "Technical Council, IIT Gandhinagar",
        timeframe: "May 2026 - Present",
        role: "Council Member",
        achievements: [
          <>Contribute to the strategic direction and organization of technical programs within the institute.</>,
          <>Cultivate a culture of collaboration, continuous learning, and innovation among peers.</>,
        ],
        images: [],
      },
      {
        company: "Mental Health Foundation India",
        timeframe: "Jan 2025 - Apr 2025",
        role: "Data Science Intern",
        achievements: [
          <>Leveraged analytical foundations to streamline workflows and improve organizational efficiency.</>,
          <>Translated complex, large-scale information into clear, actionable insights for better decision-making.</>,
        ],
        images: [],
      },
      // {
      //   company: "FLY",
      //   timeframe: "2022 - Present",
      //   role: "Senior Design Engineer",
      //   achievements: [
      //     <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
      //     <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>,
      //   ],
      //   images: [
      //     // optional: leave the array empty if you don't want to display images
      //     {
      //       src: "/images/projects/project-01/cover-01.jpg",
      //       alt: "Once UI Project",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "IIT Gandhinagar",
        description: (
          <>
            Master of Science in Mathematics (Jul 2025 - Present). <br />
            Focused on advanced problem-solving, abstract logic, and theoretical foundations.
          </>
        ),
      },
      {
        name: "University of Delhi",
        description: (
          <>
            Bachelor of Science in Mathematics (Jan 2022 - Jun 2025). <br />
            Developed a rigorous background in analytical thinking and quantitative systems.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/notes.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/log.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cat.png",
      alt: "image",
      orientation: "horizontal",
    },

    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
