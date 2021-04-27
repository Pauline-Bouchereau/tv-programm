const Section = (props) => {
  const { time, title, type, duration, image, isUnseen, direct } = props;
  return (
    <section>
      <p>{time}</p>
      <div>
        <img src={image} alt="Image programme" />
        <div>
          <h2>{title}</h2>
          <span>{type}</span>
          <div>
            <p>{duration}</p>
            {isUnseen && <p className="red">• Inédit</p>}
            {direct && <p className="red">• Direct</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
