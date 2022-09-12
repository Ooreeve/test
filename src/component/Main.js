export default function Main(props) {
    let badgeText;
    if (props.item.inventory === 0) {
        badgeText = "Out Of Stock";
    } else if (props.item.inventory === null) {
        badgeText = "";
    } else {
        badgeText = "In Stock (" + props.item.inventory + ")";
    }

    return (
        <div className="main">
            {badgeText && <div className="main-badge">{badgeText}</div>}
            <img className="main-img" src={props.item.img}></img>
            <h1 className="main-brand">Brand: {props.item.brand}</h1>
            <p className="main-model">Model: {props.item.model}</p>
        </div>
    );
}
