import { ICity } from "../Cities.types";
import Table from "react-bootstrap/Table";
import "./CitiesList.scss";
import CityItem from "../CityItem/CityItem";

interface CitiesListProps {
  cities: ICity[];
  onClick: (id: number) => void
}

const CitiesList = ({ cities, onClick }: CitiesListProps) => {
  return (
    <div className="cities-list__container">
      <Table
        className="cities-list__table"
        striped
        bordered
        hover
        responsive
        size="md"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <CityItem key={ city.id } onClick={ onClick } city={city} />
          ))}
        </tbody>
      </Table>

    </div>
  );
};

export default CitiesList;
