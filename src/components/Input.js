const Input = ({ text, id, onChangleHandler }) => {
  return (
    <>
      <label htmlFor={id} className="">
        {text}
      </label>
      <input type="text" id={id} onChange={onChangleHandler} />
    </>
  );
};
export default Input;
