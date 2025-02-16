import PropTypes from "prop-types";

const Heading = ({title,subtitle}) => {
    return (
        <div className="flex flex-col justify-center py-5 items-center">
            <h2 className="text-3xl mb-2">{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};
Heading.propTypes={
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
}

export default Heading;