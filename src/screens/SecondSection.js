import WebsiteCard from "../components/WebsiteCard";
import "./SecondSection.css";
import bmWebsite from "../images/bmwebsite.jpg";
import artWebsite from "../images/artwebsite.jpg";
import countryWebsite from "../images/countrywebsite.jpg";
import wcWebsite from "../images/wcwebsite.jpg";

const SecondSection = () => {
  return (
    <div className="second-container">
      <div className="card-holder">
        <WebsiteCard
          webImage={wcWebsite}
          webName="CRUD Website"
          webDescription="Full Stack Poem posting website that gives all basic CRUD functionality. Each Poem can be 'up voted' and will display a count of their upvotes."
          languages={["MongoDB", "Express", "React", "Node.js", "CSS3"]}
          webLink="https://wordcollections2.herokuapp.com/"
          codeLink="https://github.com/louiseeasterbrook/poemWebsite"
        />
        <WebsiteCard
          webImage={artWebsite}
          webName="Eccomerce Website"
          webDescription="E-commerce website is a full stack website that utilises redux to fetch data and handle the website state. "
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
          webImage={countryWebsite}
          webName="API Fetching Website"
          webDescription="Country Search allows users to search a country name and recieve back a card full of information on the specific country. The information displayed has been fetched from an API."
          languages={["HTML5", "JavaScript", "Sass"]}
          webLink="https://louise-countrysearch.netlify.app/"
          codeLink="https://github.com/louiseeasterbrook/countrySearch"
        />
        <WebsiteCard
          webImage={bmWebsite}
          webName="Basic Information Website"
          webDescription="This front-end website uses a variety of interactive website elements and an API generated map to present information on the Blue Mountains."
          languages={["HTML5", "JavaScript", "CSS3"]}
          webLink="https://discoverbluemountains.netlify.app/"
          codeLink="https://github.com/louiseeasterbrook/discoverBlueMountains"
        />
      </div>
    </div>
  );
};

export default SecondSection;
