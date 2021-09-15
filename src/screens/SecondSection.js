import WebsiteCard from "../components/WebsiteCard";
import "./SecondSection.css";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";

const SecondSection = () => {
  return (
    <div className="second-container">
      <div className="card-holder">
        <WebsiteCard
          webImage={image5}
          webName="CRUD Website"
          webDescription="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
          languages={["React", "Express", "CSS3", "MongoDB", "Node.js"]}
        />
        <WebsiteCard
          webImage={image3}
          webName="Website with User Authentication"
          webDescription="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
          languages={["React", "JavaScript", "CSS3"]}
        />
        <WebsiteCard
          webImage={image3}
          webName="Blue Mountains"
          webDescription="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
          languages={["HTML5", "JavaScript", "CSS3"]}
        />
        <WebsiteCard
          webImage={image4}
          webName="Front-End Eccommerce Site"
          webDescription="Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
          languages={["Javascript", "HTML5", "Sass"]}
        />
      </div>
    </div>
  );
};

export default SecondSection;
