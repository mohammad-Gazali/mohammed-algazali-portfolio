import { Project } from "../types/app";
import { FC } from "react";
import { bootstrap, css, dart, django, firebase, flutter, framerMotion, graphql, htmlTech, javascript, materialUI, nextjs, pocketBase, python, react, supabase, tailwind, typescript } from "./technologies";


interface CommonProjectContentProps {
    important: string;
    header: string;
    features: string[];
}

const CommonProjectContent: FC<CommonProjectContentProps> = ({ important, header, features }) => {
    return (
        <>
            <p className="sm:text-xl text-lg">
                <strong className="text-secondary-light">
                    {important}
                </strong>{" "}
                {header}
            </p>
            <br />
            <h4 className="font-semibold sm:text-lg mb-2">
                Features:
            </h4>
            <ul className="list-disc space-y-4">
                {features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
        </>
    )
}


export default [
    { 
        id: 1,
        name: "Django Academy",
        description: (
            <CommonProjectContent 
            important="Django Academy"
            header="is a site for an educational academy that sells its courses to students, also it includes a powerful blog for educational articles, this website was built using Django framework."
            features={[
                "Support for both Arabic and English languages, which can be changed through the site bar above.",
                "Control panel which the manager can use for adding new courses to the site.",
                "The courses are closed to all users. After purchasing the course and the success of the purchase, the course is opened to the person who purchased it only.",
                "In each video there is a section for comments and responses.",
                "The site contains a blog, through which articles can be created and displayed.",
                "Including real payment service with Stripe for credit card purchasing."
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/Academy",
        images: [
            "/assets/projects/django-academy/image-01.webp",
            "/assets/projects/django-academy/image-02.webp",
            "/assets/projects/django-academy/image-03.webp",
            "/assets/projects/django-academy/image-04.webp",
            "/assets/projects/django-academy/image-05.webp",
            "/assets/projects/django-academy/image-06.webp",
            "/assets/projects/django-academy/image-07.webp",
            "/assets/projects/django-academy/image-08.webp",
            "/assets/projects/django-academy/image-09.webp",
            "/assets/projects/django-academy/image-10.webp",
            "/assets/projects/django-academy/image-11.webp",
            "/assets/projects/django-academy/image-12.webp",
            "/assets/projects/django-academy/image-13.webp",
            "/assets/projects/django-academy/image-14.webp",
        ],
        technologies: [
            python,
            django,
            bootstrap,
            htmlTech,
            css,
            javascript,
        ],
    },
    { 
        id: 2,
        name: "Next Store",
        description: (
            <CommonProjectContent
            important="Next Store"
            header="is a site for a commercial site that sells various products, this website was built using Next.js framework."
            features={[
                "Users authentication with Google and Github accounts.",
                "Beautiful UI using shadcn/ui tailwind components library.",
                "Including real payment service with Stripe for credit card purchasing.",
                "Ability to review products in the store."
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/next-store",
        images: [
            "/assets/projects/next-store/image-01.webp",
            "/assets/projects/next-store/image-02.webp",
            "/assets/projects/next-store/image-03.webp",
            "/assets/projects/next-store/image-04.webp",
            "/assets/projects/next-store/image-05.webp",
            "/assets/projects/next-store/image-06.webp",
            "/assets/projects/next-store/image-07.webp",
            "/assets/projects/next-store/image-08.webp",
            "/assets/projects/next-store/image-09.webp",
        ],
        technologies: [
            nextjs,
            supabase,
            tailwind,
            typescript,
            react,
        ],
    },
    { 
        id: 3,
        name: "Next Blog",
        description: (
            <CommonProjectContent
            important="Next Blog"
            header="is a blog site for making various articles that is built using Next.js framework."
            features={[
                "Support for light and dark themes.",
                "Users authentication with Github accounts.",
                "Full supported text editor for with all features like: bold, italic, underlined, colored, marked, aligned text and more text features.",
                "The ability to uploading images to the articles."
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/next-blog",
        images: [
            "/assets/projects/next-blog/image-01.webp",
            "/assets/projects/next-blog/image-02.webp",
            "/assets/projects/next-blog/image-03.webp",
            "/assets/projects/next-blog/image-04.webp",
            "/assets/projects/next-blog/image-05.webp",
            "/assets/projects/next-blog/image-06.webp",
            "/assets/projects/next-blog/image-07.webp",
        ],
        technologies: [
            nextjs,
            supabase,
            tailwind,
            typescript,
            react,
        ],
    },
    { 
        id: 4,
        name: "Django Exams App",
        description: (
            <CommonProjectContent
            important="Django Exams App"
            header="is an educational site for making and taking exams, this website was built using Django framework."
            features={[
                "Users authentication with email vertification by sending a magic link.",
                "Users authentication with Google accounts",
                "Protection from bots by reCAPTCHA.",
                "Styling with plain CSS (it was plain 🥲)",
                "Ability to add exams with multiple choice, true & false and essay questions with all vertifcation and validation process of these questions and this exam.",
                "Full supported text editor for with all features like: bold, italic, underlined, colored, marked, aligned text and more text features.",
                "The ability to uploading images to the questions.",
                "Giving the result after taking the exam automatically.",
                "Displaying the right answers after finishing the exams with explanation of all the answers."
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/Exams-app",
        images: [
            "/assets/projects/django-exams-app/image-01.webp",
            "/assets/projects/django-exams-app/image-02.webp",
            "/assets/projects/django-exams-app/image-03.webp",
            "/assets/projects/django-exams-app/image-04.webp",
            "/assets/projects/django-exams-app/image-05.webp",
            "/assets/projects/django-exams-app/image-06.webp",
            "/assets/projects/django-exams-app/image-07.webp",
            "/assets/projects/django-exams-app/image-08.webp",
            "/assets/projects/django-exams-app/image-09.webp",
            "/assets/projects/django-exams-app/image-10.webp",
            "/assets/projects/django-exams-app/image-11.webp",
            "/assets/projects/django-exams-app/image-12.webp",
            "/assets/projects/django-exams-app/image-13.webp",
            "/assets/projects/django-exams-app/image-14.webp",
            "/assets/projects/django-exams-app/image-15.webp",
            "/assets/projects/django-exams-app/image-16.webp",
            "/assets/projects/django-exams-app/image-17.webp",
            "/assets/projects/django-exams-app/image-18.webp",
            "/assets/projects/django-exams-app/image-19.webp",
            "/assets/projects/django-exams-app/image-20.webp",
            "/assets/projects/django-exams-app/image-21.webp",
            "/assets/projects/django-exams-app/image-22.webp",
            "/assets/projects/django-exams-app/image-23.webp",
            "/assets/projects/django-exams-app/image-24.webp",
            "/assets/projects/django-exams-app/image-25.webp",
            "/assets/projects/django-exams-app/image-26.webp",
        ],
        technologies: [
            python,
            django,
            htmlTech,
            css,
            javascript
        ],
    },
    { 
        id: 5,
        name: "React Post App with Pocketbase",
        description: (
            <CommonProjectContent
            important="React with Pocketbase"
            header="is a simple social site for making posts and sharing then, this website was built using React framework."
            features={[
                "Users authentication with emails using pocketbase.",
                "Support for users avatar with pocketbase object storage.",
                "Beautiful UI by using daisy ui tailwind components library.",
                "Ability to add posts and add likes to the posts."
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/React_with_Pocketbase",
        images: [
            "/assets/projects/react-post-app-with-pocketbase/image-01.webp",
            "/assets/projects/react-post-app-with-pocketbase/image-02.webp",
            "/assets/projects/react-post-app-with-pocketbase/image-03.webp",
            "/assets/projects/react-post-app-with-pocketbase/image-04.webp",
            "/assets/projects/react-post-app-with-pocketbase/image-05.webp",
        ],
        technologies: [
            react,
            pocketBase,
            tailwind,
            typescript
        ],
    },
    { 
        id: 6,
        name: "React Family Tree",
        description: (
            <CommonProjectContent
            important="React Family Tree"
            header="is a simple web app for display and editing family tree, this website was built using React framework."
            features={[
                "Beautiful UI by using material UI components library.",
                "Handling complex family relations with GraphQl and Apollo Client library",
                "Ability to add deep relations between family members.",
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/Family_Tree",
        images: [
            "/assets/projects/react-family-tree/image-01.webp",
            "/assets/projects/react-family-tree/image-02.webp",
            "/assets/projects/react-family-tree/image-03.webp",
            "/assets/projects/react-family-tree/image-04.webp",
            "/assets/projects/react-family-tree/image-05.webp",
            "/assets/projects/react-family-tree/image-06.webp",
            "/assets/projects/react-family-tree/image-07.webp",
        ],
        technologies: [
            react,
            materialUI,
            graphql,
            javascript,
        ],
    },
    { 
        id: 7,
        name: "Light Social Facebook main page copy",
        description: (
            <CommonProjectContent
            important="Light Social"
            header="is a Facebook main page copy, this website was built using React framework."
            features={[
                "Support for light and dark themes.",
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/Light_social_app",
        images: [
            "/assets/projects/react-light-social/image-01.webp",
            "/assets/projects/react-light-social/image-02.webp",
            "/assets/projects/react-light-social/image-03.webp",
            "/assets/projects/react-light-social/image-04.webp",
        ],
        technologies: [
            react,
            tailwind,
            supabase,
            javascript,
        ],
    },
    { 
        id: 8,
        name: "React Portfolio",
        description: (
            <CommonProjectContent
            important="React Portfolio"
            header="is the current website 😁, it is a professional portfolio for web developers, this website was built using React framework."
            features={[
                "Beautiful animation with Framer motion library.",
                "The website is dynamic, so other developers can use it by changing the constants in the \"constants\" folder in the source code.",
                "Making the website with accessibility standards.",
                "Powerful contact form by using email.js library.",
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/mohammed-algazali-portfolio",
        images: [
            "/assets/projects/react-portfolio/image-01.webp",
            "/assets/projects/react-portfolio/image-02.webp",
            "/assets/projects/react-portfolio/image-03.webp",
            "/assets/projects/react-portfolio/image-04.webp",
            "/assets/projects/react-portfolio/image-05.webp",
            "/assets/projects/react-portfolio/image-06.webp",
            "/assets/projects/react-portfolio/image-07.webp",
            "/assets/projects/react-portfolio/image-08.webp",
            "/assets/projects/react-portfolio/image-09.webp",
        ],
        technologies: [
            react,
            framerMotion,
            tailwind,
            typescript,
        ],
    },
    {
        id: 9,
        name: "Flutter Chat",
        description: (
            <CommonProjectContent
            important="Flutter Chat"
            header="is flutter framework based mobile app for making chats communication between users."
            features={[
                "Beautiful app design using material 3 design system.",
                "Support for authentication for users including authentaication via google account.",
                "Support for realtime data for live chats.",
                "Using firebase for making database using firestore and auth with firebase auth.",
                "Handling professionally loading and error states for good user experience.",
            ]}
            />
        ),
        repository: "https://github.com/mohammad-Gazali/gazali_chat_flutter",
        images: [
            "/assets/projects/flutter-chat/image-01.webp",
            "/assets/projects/flutter-chat/image-02.webp",
            "/assets/projects/flutter-chat/image-03.webp",
            "/assets/projects/flutter-chat/image-04.webp",
        ],
        technologies: [
            dart,
            flutter,
            firebase,
        ]
    }
] satisfies Project[];