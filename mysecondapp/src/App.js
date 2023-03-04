import React from "react";

const App = () => {
  return (
    <div>
      <Clicker />
      <EmPwdForm />
    </div>
  );
};

///////// Practice Form ///////////////////////
const EmPwdForm = () => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email = ${email}, Password = ${pwd}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            name="pwd"
            type="password"
            value={pwd}
            onChange={(event) => setPwd(event.target.value)}
            required
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

///////////// Practice - Function component with React Hook //////////////
const Clicker = () => {
  const [numberOfClicks, setNumberOfClicks] = React.useState(0);

  return (
    <div>
      <h1>A Button That Counts Its Clicks</h1>
      <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}>
        Click Me!
      </button>
      <br />
      <p>
        You have clicked this button {numberOfClicks} time
        {numberOfClicks == 1 ? "" : "s"}.
      </p>
      <p>
        <button onClick={() => setNumberOfClicks(0)}>Reset</button>
      </p>
    </div>
  );
};

export default App;
