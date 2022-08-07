import { ICity } from '../Cities.types'

interface CityItemProps {
  key: number
  city: ICity;
  onClick: (id: number) => void
}

const CityItem = ({ city, onClick }: CityItemProps ) => {
  const { id, title, content }: Partial<ICity> = city;
  return (
    <tr onClick={() => onClick(id) } className="cities-list__item" key={ id }>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
    </tr>
  )
}

export default CityItem