import PropTypes from "prop-types";
import { FaTrashAlt } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";
const Card = ({ coffee,handleRemove }) => {
    const {pathname} =useLocation()
    console.log(coffee)
    const { id,name, image, category, origin, type, rating, popularity } = coffee || {};
    return (
        <div className='rounded-2xl flex relative'>
            <Link to={`/coffee/${id}`} className="transition hover:scale-105 shadow-xl overflow-hidden rounded-xl">
                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} className="rounded-2xl" alt="" />
                </figure>
                <div className="p-4">
                    <h2>name : {name}</h2>
                    <p>category : {category}</p>
                    <h2>type : {type}</h2>
                    <h2>origin : {origin}</h2>
                    <h2>rating : {rating}</h2>
                    <h2>popularity : {popularity}</h2>
                </div></Link>
                {pathname === '/dashboard' && (
        <div
          onClick={() => handleRemove(id)}
          className='absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5'
        >
          <FaTrashAlt size={20} />
        </div>
      )}

        </div>
    );
};
Card.propTypes = {
    coffee: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired,
    origin: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

export default Card;