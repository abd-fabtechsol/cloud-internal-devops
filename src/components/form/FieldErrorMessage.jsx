const FieldErrorMessage = ({ errors }) => {
  if (!errors || (Array.isArray(errors) && errors.length === 0)) {
    return null;
  }

  if (typeof errors === 'string') {
    // If errors is a string, wrap it in an array for consistency
    errors = [errors];
  }

  return (
    <div className="text-danger">
      {errors.map((error, index) => (
        <p key={index} className="error">
          {error}
        </p>
      ))}
    </div>
  );
};

  export default FieldErrorMessage