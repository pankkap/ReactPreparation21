import PropTypes from "prop-types";
const Student = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      <h2>{props.roll}</h2>
    </>
  );
};

Student.propTypes = {
  // the p in propTypes is small is property name
  // the P in PropTypes is Caputal which is component name
  name: PropTypes.string,
  roll: PropTypes.number,
};

Student.defaultProps = {
  name: "Koenig-Solutions",
  roll: 0,
};
export default Student;
