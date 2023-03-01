const App = () => {
  const dateObj = new Date();
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>The current date is {dateObj.toLocaleDateString()}.</h2>
      <h2>The current time is {dateObj.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default App;

// if (keyDown("space")) {
//   lowerblink.y = lowerblink.y + 2;
//   upperblink.y = upperblink.y - 2;
// } else {
//   lowerblink.y = lowerblink.y - 2;
//   upperblink.y = upperblink.y + 2;
// }

// // make sure blinkers don't move too far.
// if (lowerblink.y < 200) {
//   lowerblink.y = 200;
// }
// if (lowerblink.y > 400) {
//   lowerblink.y = 400;
// }
