import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-sm w-full bg-foreground text-background dark:bg-popover dark:text-foreground p-6 text-center font-inter">
      <div>
        <ul className="list-none p-0 mb-4 flex justify-center gap-4">
          <li>
            <a
              href="https://github.com/Cristian-Chiorescu"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-4 w-4 hover:text-white transition"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristianchiorescu/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-4 w-4  hover:text-white transition"
              />
            </a>
          </li>
        </ul>
        <p>
          &copy; <span id="current-year">{currentYear}</span> Cristian
          Chiorescu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
