const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const handleChage = (e) => {
    props.onTemperatureChage(e.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요 (단위:{scaleNames[props.scake]})</legend>
      <input value={props.temperature} onChange={handleChage} />
    </fieldset>
  );
}
export default TemperatureInput;
