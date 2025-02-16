import {  NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({categories}) => {

    return (
        <div role="tablist" className="tabs flex justify-around tabs-lift max-w-7xl mx-auto bg-cover bg-center ">
            {
                categories.map(category => <NavLink className={({ isActive}) => `tab ${isActive? 'tab-active':''}`
                  } to={`/category/${category.category}`} key={category.category} role="tab">{category.category}</NavLink>)
            }
        </div>
    );
};
Categories.propTypes={
    categories:PropTypes.object.isRequired,

}

export default Categories;