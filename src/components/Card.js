import mapMarker from '../images/map-marker.svg'

function Card(props){
    let imgStyle = {
        backgroundImage: `url(${props.imageUrl})`
      };
    return (
        <div className='card'>
            <div className="card-img" style={imgStyle}> </div>
            <div className='card-info'>
                <div className="card-location">
                    <span className="location">
                        <img src={mapMarker} alt="" />
                        {props.location}
                    </span>
                    <a href={props.googleMapsUrl} className="google-maps-url">View on Google Maps</a>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
}
export default Card;