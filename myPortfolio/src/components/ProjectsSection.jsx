import { ArrowRight, ExternalLink, Github } from "lucide-react";

  // {
  //   id: 4,
  //   title: "PetCare Management System",
  //   description:
  //     "PetCare Management System is a comprehensive solution for managing pet care services, including appointments, medical records, and billing. The platform connects pet owners with veterinarians and service providers, ensuring the best care for pets.",
  //   image: "/projects/project_4.png",
  //   tags: ["HTML5", "CSS", "React", "MongoDB", "ExpressJs"],
  //   demoUrl: "https://cse471-pet-care-deploy.vercel.app/",
  //   githubUrl: "https://github.com/utshobbose/Cse471_PetCare_Management",
  //   demoUrl: "#",
  // }

const projects = [
    {
    id: 1,
    title: "FitTrack ",
    description: "FitTrack is a full-featured fitness and wellness web application with AI suggestions designed to help users achieve their health goals through personalized plans, intuitive tools, and expert recommendations.",
    image: "/projects/project1.png",
    tags: ["React", "Express", "MongoDB"],
    demoUrl: "https://fit-track-iota-seven.vercel.app/",
    githubUrl: "https://github.com/utshobbose/FitTrack",
  },

  {
    id: 2,
    title: "Car Service Booking System",
    description:
      "A web-based application that allows car owners to book appointments for car servicing. Users can select a date, choose an available time slot, and select a preferred mechanic. The system ensures that mechanics' availability is managed and appointments are scheduled without conflicts.",
    image: "/projects/project2.png",
    tags: [ "Next.js", "Express", "MongoDB"],
    demoUrl: "https://car-workshop-eight.vercel.app/",
    githubUrl: "https://github.com/utshobbose/Car-Workshop",
  },
  {
    id: 3,
    title: "Throttler",
    description:
      "Throttler merges premium bike shopping with expert on-demand mechanic services, delivering repairs and maintenance to your doorstep. Schedule effortlessly, enjoy transparent pricing, and elevate your ride with seamless convenience. Ride smarter, ride smoother.",
    image: "/projects/project3.png",
    tags: ["HTML5", "CSS", "PHP", "MySQL"],
    githubUrl: "https://github.com/utshobbose/Throttler",
  },
    {
    id: 4,
    title: "SmartResume_Analyzer",
    description:
      "SmartResume_Analyzer is an AI-powered tool designed to help job seekers optimize their resumes. By analyzing job descriptions and providing tailored suggestions, it enhances the chances of landing interviews.",
    image: "",
    tags: ["Svelte", "Tailwind CSS", "Express.js", "Node.js"],
    githubUrl: "https://github.com/utshobbose/SmartResume_Analyzer",
  },
    {
    id: 5,
    title: "MiniVSFS",
    description:
      "MiniVSFS is a simple, custom-built virtual file system (VFS) designed to emulate file system operations with basic features such as inode management, file allocation, and directory handling. This project demonstrates creating and managing a file system image using basic operations such as creating the image, adding files, and displaying basic file system information.",
    image: "",
    tags: ["C", "Shell", "GCC", "Ubuntu"],
    githubUrl: "https://github.com/utshobbose/MiniVSFS",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                    key={`${project.id}-${index}`}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/utshobbose"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
