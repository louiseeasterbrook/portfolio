import "./SecondSection.css";

//components
import WebsiteCard from "../components/WebsiteCard";

//images
import bmWebsite from "../images/bmwebsite.jpg";
import artWebsite from "../images/artwebsite.jpg";
import countryWebsite from "../images/countrywebsite.jpg";
import wcWebsite from "../images/wcwebsite.jpg";

const SecondSection = ({ projectsRef }) => {
  return (
    <div ref={projectsRef}>
      <div className="second-container">
        <h2 className="second-title">My Projects</h2>

        <div className="card-holder">
          <WebsiteCard
            webImage={wcWebsite}
            webName="CRUD Website"
            webDescription="Full-stack poem posting website that gives all basic CRUD functionality. Each Poem can be 'up voted' and will display a count of their votes. Posts made to this website will only be accepted on the server-side if the post is accompanied by a speicifc authorisation header"
            languages={["MongoDB", "Express", "React", "Node.js", "CSS3"]}
            webLink="https://wordcollections2.herokuapp.com/"
            codeLink="https://github.com/louiseeasterbrook/poemWebsite"
          />
          <WebsiteCard
            webImage={artWebsite}
            webName="E-commerce Website"
            webDescription="Full-stack E-commerce website that utilises redux to fetch data and handle the website state. "
            languages={[
              "MongoDB",
              "Express",
              "React",
              "Node.js",
              "Redux",
              "CSS3",
            ]}
            webLink="https://carlaandfigart.herokuapp.com/"
            codeLink="https://github.com/louiseeasterbrook/art-ecommerce"
          />
          <WebsiteCard
            webImage={bmWebsite}
            webName="Information Website"
            webDescription="This front-end website uses a variety of interactive website elements and an API generated map to present information on the Blue Mountains."
            languages={["HTML5", "JavaScript", "CSS3"]}
            webLink="https://discoverbluemountains.netlify.app/"
            codeLink="https://github.com/louiseeasterbrook/discoverBlueMountains"
          />

          <WebsiteCard
            webImage={countryWebsite}
            webName="API Fetching Website"
            webDescription="Country Search allows users to search a country name and recieve back a card full of information on the specific country. The information displayed has been fetched from an API."
            languages={["HTML5", "JavaScript", "Sass"]}
            webLink="https://louise-countrysearch.netlify.app/"
            codeLink="https://github.com/louiseeasterbrook/countrySearch"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
