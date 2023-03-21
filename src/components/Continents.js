import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import continentsData from '../data/data';
import { getCountries } from '../redux/countries/countriesSlice';
import { Link } from 'react-router-dom';

const Continents= () => {
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(getCountries(name));
  };

  return (
    <section className="continents">
      <ul className="items">
        {continentsData.map(({ id, name, image }) => (
          <li key={id}>
            <img src={image} alt="awesome" />
            <h2>{name}</h2>
            <Link to={`/${name}`}>
              <BsFillArrowRightCircleFill onClick={() => handleClick(name)} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Continents;