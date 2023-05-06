const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <div>물이 끓습니다</div>;
  }
  return <div>물이 끓지 않습니다</div>;
};
export default BoilingVerdict;
