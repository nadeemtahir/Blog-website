import React from 'react';
import BlogCard from './blogCard';

function Mega() {
  const posts = [
    {
      id: "1",
      title: "HTML Block Elements",
      description:
        "HTML (HyperText Markup Language) is used to structure content on the web. It defines elements like headings, paragraphs, and links, allowing browsers to display text and images correctly. HTML forms the foundation of every webpage.",
      date: "2024-12-25",
      imageUrl: "/images/html.jpeg",
    },
    {
      id: "2",
      title: "Cascading Style Sheet",
      description:"CSS (Cascading Style Sheets) is used to control the look and feel of a website. It defines styles for elements like colors, fonts, and layouts, allowing developers to create visually appealing and responsive web pages. CSS enhances the user experience by making websites more attractive and interactive.",
      date: "2024-12-25",
      imageUrl: "/images/css.png",
    },
    {
      id: "3",
      title: "JavaScript",
      description:
        "JavaScript is a programming language that enables dynamic and interactive elements on web pages. It allows developers to create features like form validation, animations, and real-time updates, making websites more engaging and functional. JavaScript works alongside HTML and CSS to build modern, interactive web applications.",
      date: "2024-12-25",
      imageUrl: "/images/js.jpeg",
    },
    {
      id: "4",
      title: "React",
      description:
        "React is a JavaScript library used to build user interfaces, especially for single-page applications. It allows developers to create reusable components, making it easier to manage and update the UI efficiently. React's virtual DOM improves performance by updating only the parts of the page that change, creating a smooth user experience.",
      date: "2024-12-25",
      imageUrl: "/images/react.jpeg",
    },
    {
      id: "5",
      title: "Node.js",
      description:
        "Node.js is a runtime environment that allows developers to run JavaScript on the server side. It is built on Chrome's V8 JavaScript engine and is known for its fast performance and non-blocking, event-driven architecture. Node.js is commonly used for building scalable network applications, APIs, and real-time services like chat applications.",
      date: "2024-12-25",
      imageUrl: "/images/node.png",
    },
    {
      id: "6",
      title: "MongoDB",
      description:
        "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. Unlike traditional relational databases, MongoDB allows for schema-less data storage, making it ideal for handling large volumes of unstructured or semi-structured data. It’s widely used for modern applications due to its scalability, high performance, and ease of use in handling complex, evolving data structures.",
      date: "2024-12-25",
      imageUrl: "/images/mongodb.jpeg",
    },
    {
      id: "7",
      title: "Express",
      description:
        "Express is a minimal and flexible web application framework for Node.js. It simplifies the process of building robust and scalable web applications and APIs by providing a set of powerful features like routing, middleware, and template engines. Express is widely used for server-side development due to its lightweight nature and ability to handle a variety of HTTP requests efficiently.",
      date: "2024-12-25",
      imageUrl: "/images/express.png",
    },
    {
      id: "8",
      title: "Shadcn",
      description:
        "ShadCN is a lightweight React UI component library focused on simplicity, flexibility, and accessibility. It offers pre-designed, customizable components compatible with modern tools like Tailwind CSS, making development faster and easier. With ShadCN, you can build visually consistent and user-friendly interfaces effortlessly",
      date: "2024-12-25",
      imageUrl: "/images/shadcn.jpeg",
    },
    {
      id: "9",
      title: "Sanity",
      description:
        "Sanity is a powerful headless CMS designed for managing structured content efficiently. It offers real-time collaboration, customizable content modeling, and robust APIs for delivering content across web and mobile platforms. With Sanity, teams can create seamless and scalable digital experiences.",
      date: "2024-12-25",
      imageUrl: "/images/sanity.jpeg",
    },
    {
      id: "10",
      title: "Firebase",
      description:
        "Firebase is a comprehensive app development platform by Google, offering tools like real-time databases, authentication, hosting, and cloud storage. It simplifies backend integration, enabling developers to build scalable and feature-rich applications. With Firebase, you can deliver real-time, high-performance user experiences.",
      date: "2024-12-25",
      imageUrl: "/images/fire.png",
    },
    {
      id:"11",
      title:"GraphQL",
      description:"GraphQL is a flexible query language for APIs that allows clients to request specific data with precision. Unlike REST, it enables fetching multiple resources in a single request, reducing network calls. With features like strong typing and real-time updates, GraphQL enhances efficiency and developer collaboration.",
      date:"2024-12-25",
      imageUrl:"/images/graphql.jpeg"
    },
    {
      id:"12",
      title:"Docker",
      description:"Docker is a platform that simplifies app development and deployment using containers, which package applications with all dependencies. It ensures consistency across environments, from development to production. Docker streamlines scalability, CI/CD workflows, and simplifies managing multi-service applications.",
      date:"2024-12-25",
      imageUrl:"/images/docker.jpeg"
    }
  ];

  return (
    <div className="py-8 bg-neutral-200">
      <h1 className="text-5xl mb-12 font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of Development
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={post.id} className="fade-in">
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mega;
