function App() {
  let dateToday = new Date();
  return (
    <div>
      <h1>Hello world! From Matt Stockinger!</h1>
      <h2>
        The time now is {dateToday.toLocaleTimeString()}. The date is{" "}
        {dateToday.getDay()}, {dateToday.getMonth()} {dateToday.getDate()}.
      </h2>
    </div>
  );
}
export default App;
