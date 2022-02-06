const Filter = (props) => {
    // on select change set filter state
  return (
    <div>
      <select
        value={props.value}
        onChange={(event) => {
          props.setFilter(event.target.value);
        }}
        className="dropmenu"
        className="text-uppercase"
      >
        <option value="all">All {props.title}</option>
        {props.data &&
          props.data.map((tag, index) => (
            <option value={tag} key={index}>
              {tag}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
