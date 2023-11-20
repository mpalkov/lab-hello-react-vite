import ContentItem from "./ContentItem";
import './Contents.css'

const Contents = () => {
    return (
        <div id="contents">
            <ContentItem imgURL="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" itemTitle="Declarative" itemText="React adopts a Declarative approach, which means developers describe how the user interface should look based on its current state." />
            <ContentItem imgURL="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" itemTitle="Components" itemText="Build encapsulated components that manage their state." />
            <ContentItem imgURL="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" itemTitle="Single-Way" itemText="A set of inmutable values passed to tohe components." />
            <ContentItem imgURL="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" itemTitle="JSX" itemText="Statically typed, designed to run on modern browsers." />
        </div>
    );
};

export default Contents;