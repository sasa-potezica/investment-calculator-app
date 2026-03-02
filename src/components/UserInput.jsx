import React from "react";

const UserInput = () => {
  return (
    <section className="input-group">
      <p>
        <label htmlFor="">Initial Investment</label>
        <input type="number" required />
      </p>
      <p>
        <label htmlFor="">Annual Investment</label>
        <input type="number" required />
      </p>
      <p>
        <label htmlFor="">Expected Return</label>
        <input type="number" required />
      </p>
      <p>
        <label htmlFor="">Duration</label>
        <input type="number" required />
      </p>
    </section>
  );
};

export default UserInput;
