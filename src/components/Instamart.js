import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h2 className="font-bold text-xl">{title}</h2>
      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about")
  return (
    <div>
      <Section
        title={"About Instamart"}
        description={"This is the about section of instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={(isVisible) => isVisible ? setVisibleSection("about") : setVisibleSection(null)}
      />
      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of instamart. The team has 100+ members"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(isVisible) => isVisible ? setVisibleSection("team") : setVisibleSection(null)}
      />
      <Section
        title={"Career Instamart"}
        description={
          "This is the career section of instamart.Currently no opening are there."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={(isVisible) => isVisible ? setVisibleSection("career") : setVisibleSection(null)}

      />
      <Section
        title={"Products Instamart"}
        description={
          "This is the Products section of instamart.Currently no opening are there."
        }
        isVisible={visibleSection === "product"}
        setIsVisible={(isVisible) => isVisible ? setVisibleSection("product") : setVisibleSection(null)}

      />
      <Section
        title={"Details Instamart"}
        description={
          "This is the Details section of instamart. "
        }
        isVisible={visibleSection === "detail"}
        setIsVisible={(isVisible) => isVisible ? setVisibleSection("detail") : setVisibleSection(null)}
      />

      <h1>Instamart</h1>
      <h2>It contains a 100s of components! </h2>
    </div>
  );
};

export default Instamart;
