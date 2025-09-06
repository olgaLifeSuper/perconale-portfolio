import cl from "./numbers.module.css";

const Numbers = () => {
  return (
    <>
      <main className={cl.numbers}>
        <div className={cl.number__block}>
          <h2>80+</h2>
          <p>Satisfied clients</p>
        </div>
        <div className={cl.line}></div>
        <div className={cl.number__block}>
          <h2>200+</h2>
          <p>Projects completed</p>
        </div>
        <div className={cl.line}></div>
        <div className={cl.number__block}>
          <h2>99+</h2>
          <p>Reviews given</p>
        </div>
      </main>
    </>
  );
};

export default Numbers;
