import "./ContentItem.css";

const ContentItem = ({imgURL, itemTitle, itemText}) => {
    return (
        <div className="content-item">
            <img className="item-image" src={imgURL} alt="image"></img>
            <h2>{itemTitle}</h2>
            <p>{itemText}</p>
        </div>
    );
};

export default ContentItem;