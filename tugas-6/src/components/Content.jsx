import Background from "/batik.png";
import { BiLogoReact } from "react-icons/bi";
import { FaJava, FaHtml5 } from "react-icons/fa";
import Background2 from "/batik-2.png";
import BackgroundS2 from "/batik-fill-2.png";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Content() {
  const myProject = [
    {
      id: 1,
      name: "Integer Store",
      icon: <BiLogoReact size={40} />,
      desc: "CRUD React project for React training Task",
      source: "https://pertemuan-8-react.vercel.app/",
    },
    {
      id: 2,
      name: "School Scheduling",
      icon: <FaJava size={40} />,
      desc: "CRUD for school scheduling of Java training middle exam",
      source:
        "https://github.com/fadlifathurrahman/uts_pelatihan_java_lanjutan.git",
    },
    {
      id: 3,
      name: "Google Classroom UI",
      icon: <FaHtml5 size={40} />,
      desc: "Google Classroom UI for HTML and CSS training task",
      source: "https://google-classroom-ui.vercel.app/tugas04.html",
    },
    {
      id: 4,
      name: "Integer Store 2.0",
      icon: <BiLogoReact size={40} />,
      desc: "CRUD React project for React training middle exam",
      source: "https://middle-exam-react.vercel.app",
    },
    {
      id: 5,
      name: "Visit Cirebon",
      icon: <BiLogoReact size={40} />,
      desc: "React project for React training task",
      source: "https://github.com/fadlifathurrahman/tugas-react-4.git",
    },
  ];
  const connection = [
    {
      id: 1,
      icon: <BsGithub size={30} />,
      link: "https://github.com/fadlifathurrahman",
    },
    {
      id: 2,
      icon: <BsLinkedin size={30} />,
      link: "https://www.linkedin.com/in/muhammad-fadli-fathurrahman-21a297217/",
    },
    {
      id: 3,
      icon: <AiFillInstagram size={30} />,
      link: "https://www.instagram.com/fadli.ft/",
    },
  ];
  return (
    <main className="min-h-screen">
      <section
        className="h-2/5 flex items-center justify-center gap-10 
      border-solid border-4 border-slate-800 mt-6 m-8 p-6
      max-xl:p-5 max-xl:m-4 max-xl:gap-8
      max-lg:p-4 max-lg:m-3 max-lg:gap-6
      max-md:p-3 max-md:m-2 max-md:gap-4
      max-sm:p-2 max-sm:m-1 max-sm:gap-2"
      >
        <article className="bg-contain bg-right ">
          <img
            src={BackgroundS2}
            className="h-44
            max-xl:h-28
            max-lg:h-24
            max-sm:h-20"
          />
          <img
            src="./IMG_0103.JPG"
            alt="Muhammad Fadli Fathurrahman"
            className="rounded-ee-3xl rounded-ss-3xl
            h-60 w-30 -mt-20 ml-24
            max-lg:h-44 max-lg:-mt-12 max-lg:ml-12 
            max-md:h-36
            max-sm:h-28"
          />
          <div
            className="bg-slate-900 bg-opacity-90 h-56 w-30 rounded-ee-3xl rounded-ss-3xl 
            -mt-48 mr-16 ml-14
            max-lg:h-44 max-lg:-mt-36 max-lg:mr-12 max-lg:ml-4 
            max-md:h-36 max-md:-mt-32 max-md:mr-8 max-md:ml-6
            max-sm:h-28 max-sm:-mt-24 max-sm:mr-2 max-sm:ml-8"
          ></div>
        </article>
        <article
          className="text-cyan-700 text-4xl flex flex-col gap-2 font-semibold
        max-lg:text-2xl
        max-md:text-xl
        max-sm:text-sm"
        >
          <p>Hello there!</p>
          <p className="mt-2">
            I&apos;m
            <span className="text-slate-800 font-bold rounded-xl p-2">
              Muhammad Fadli Fathurrahman
            </span>
          </p>
          <p>A web developer enthusiast</p>
        </article>
      </section>

      <section
        className="flex max-w-screen items-start justify-between flex-wrap m-8 gap-8
        max-xl:m-4 
        max-lg:m-3 
        max-md:justify-center  max-md:m-2
      max-sm:m-1"
      >
        <div
          className="w-4/6
          max-md:w-screen"
        >
          <div>
            <img
              src={Background}
              className="h-44 -z-10 relative mt-8
            max-lg:h-32
            max-md:h-28
            max-sm:h-20"
            />
            <div className="-mt-12 mb-2 z-10">
              <p
                className="text-white text-4xl bg-cyan-950 bg-opacity-70 p-4 font-bold
              max-lg:text-3xl
              max-md:text-2xl
              max-sm:text-1xl"
              >
                Current Project
              </p>
            </div>
          </div>
          <article
            className="border-solid border-4 border-slate-800 flex flex-wrap justify-evenly p-2 gap-1 text-white
            max-md:p-1
          "
          >
            {myProject.map((project) => (
              <Link
                className="p-4 w-80 min-h-max bg-cyan-950 bg-opacity-90 flex gap-1 flex-col flex-wrap
                hover:scale-110
                max-[1100px]:w-56
                max-md:w-52 
                max-sm:w-36"
                key={project.id}
                to={project.source}
                target="_blank"
              >
                <div className="flex items-center gap-2">
                  {project.icon}
                  <p
                    className="text-xl
                  max-lg:text-[1rem]
                  max-md:text-[0.8rem]"
                  >
                    {project.name}
                  </p>
                </div>
                <p
                  className="text-xs flex justify-center
                  max-lg:text-[0.7rem]
                  max-md:text-[0.5rem]"
                >
                  {project.desc}
                </p>
              </Link>
            ))}
          </article>
        </div>

        <div
          className="w-3/12 border-solid border-4 border-slate-800 p-6 flex flex-col justify-end
          max-md:w-1/2"
        >
          <img
            src={Background2}
            className="h-36 -z-10  
            max-lg:h-24"
          />
          <div
            className="text-white text-4xl bg-cyan-950 bg-opacity-70 p-4 font-bold -mt-12 mb-2
            max-lg:text-2xl
            max-md:text-1xl
            max-sm:text-1xl"
          >
            <p>Lets get connected</p>
            <div className="flex flex-row pt-4 justify-evenly">
              {connection.map((acc) => (
                <Link key={acc.id} to={acc.link} target="_blank">
                  {acc.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
