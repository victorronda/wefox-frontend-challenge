import "./CityDetails.scss"
import { ICity } from "../Cities.types";

interface CityDetailsProps {
  selectedCity: ICity;
}

const CityDetails = ({ selectedCity }: CityDetailsProps) => {
  const { title, content, lat, long, image_url } = selectedCity;
  return (
    <div>
      <img className="city-details__image" src={image_url} alt={title} />
      <p>{content}</p>
      <p>
        <b>Lat: </b>
        {lat}
      </p>
      <p>
        <b>Long: </b>
        {long}
      </p>
    </div>
  );
};

export default CityDetails;
