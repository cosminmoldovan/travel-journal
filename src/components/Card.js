
function Card(){
    let img = "https://source.unsplash.com/WLxQvbMyfas";
    let mapsUrl = "https://goo.gl/maps/1DGM5WrWnATgkSNB8";
    return (
        <div className='card'>
            <div className="card-img" Style={`background-image:url(${img});`}> </div>
            <div className='card-info'>
                <div className="card-location">
                    <span className="location">
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A"/>
                        </svg>
                        Japan
                    </span>
                    <a href={mapsUrl} className="google-maps-url">View on Google Maps</a>
                </div>
                <p className="card-title">Mount Fuji</p>
                <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    );
}
export default Card;