import programs from "../programs.json";

import Section from "./Section";

const Main = () => {
  return (
    <main className="container">
      {programs.map((elem, index) => {
        const { time, title, type, duration, image, isUnseen, direct } = elem;
        return (
          <Section
            key={index}
            time={time}
            title={title}
            type={type}
            duration={duration}
            image={image}
            isUnseen={isUnseen}
            direct={direct}
          />
        );
      })}
    </main>
  );
};

export default Main;
