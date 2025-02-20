function Info(props) {
  return (
    <div className="info">
    <h1>Name: {props.name}</h1>
    <h1>Course & Year: {props.courseYear}</h1>
    </div>
  );
}

export default Info;