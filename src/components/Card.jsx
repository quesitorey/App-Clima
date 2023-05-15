
const Card = ({weatherData}) => {

    return (
        <div>
            <h1 className="title">{weatherData.name}</h1>
        </div>
    );
};

export default Card;