import Aos from "aos";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Menu = () => {
  const [width, setWidth] = useState(60000);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const onWindowHashChange = () => {
      setOpen(false);
      console.log(window.location.hash);
    };
    const onNextJSHashChange = (url: any) => console.log(url);

    router.events.on("hashChangeStart", onNextJSHashChange);
    window.addEventListener("hashchange", onWindowHashChange);
    window.addEventListener("load", onWindowHashChange);

    return () => {
      router.events.off("hashChangeStart", onNextJSHashChange);
      window.removeEventListener("load", onWindowHashChange);
      window.removeEventListener("hashchange", onWindowHashChange);
    };
  }, [router.asPath, router.events]);

  useEffect(() => {
    Aos.init();
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
  }
  return (
    <div>
      {" "}
      {width < 700 && (
        <i
          style={{
            animationName:
              " 0%   {background-color:red; left:0px; top:0px;}25%  {background-color:yellow; left:200px; top:0px;}50%  {background-color:blue; left:200px; top:200px;}75%  {background-color:green; left:0px; top:200px;}100% {background-color:red; left:0px; top:0px;}",
            animationDuration: "2s",
          }}
          aria-hidden="true"
          className={`fa ${!open ? "fa-bars" : "fa-times"} mobile-nav-toggle `}
          onClick={(e) => {
            setOpen(!open);
          }}
        ></i>
      )}
      {
        <header
          id="header"
          style={{
            display: width < 700 && open == false ? "none" : "",
            height: width < 700 ? "fit-content" : "fit-content",
          }}
        >
          <nav
            id="navdbar"
            style={{
              display: width > 700 ? "flex" : "block",
            }}
            className="nav-menu navbar"
          >
            <a href="#" className="nav-link active">
              {/* <i className="fa fa-home" style={{ fontSize: "14px" }}></i>{" "} */}
              <span>Home</span>
            </a>
            <a href="#about" className="nav-link">
              {/* <i className="fa fa-user" style={{ fontSize: "14px" }}></i>{" "} */}
              <span>About</span>
            </a>
            <a href="#skills" className="nav-link">
              {/* <i className="fa fa-server" style={{ fontSize: "14px" }}></i>{" "} */}
              <span>Skills</span>
            </a>
            <a href="#Experience" className="nav-link">
              {/* <i
              className="fa fa-history "
              style={{ fontSize: "14px" }}
              aria-hidden="true"
            ></i> */}
              <span>Experience</span>
            </a>

            <a href="#projects" className="nav-link">
              {/* <i
              className="fas fa-project-diagram"
              style={{ fontSize: "14px" }}
            ></i>{" "} */}
              <span>Projects</span>
            </a>

            <a href="#contact" className="nav-link">
              {/* <i className="fa fa-envelope" style={{ fontSize: "14px" }}></i>{" "} */}
              <span>Contact</span>
            </a>
          </nav>
        </header>
      }
    </div>
  );
};
