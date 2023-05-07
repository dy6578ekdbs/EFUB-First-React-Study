const multipleForm = () => {
  <div>
    {/*input 태그*/}
    <input type="text" value={value} onChange={handleChange} />
    {/*textarea 태그*/}
    <textarea value={value} onChange={handleChange}></textarea>
    {/*select 태그*/}
    <select value={value} onChange={handleChange}>
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="grape">포도</option>
      <option value="watermelon">수박</option>
    </select>
  </div>;
};

export default multipleForm;
