import Expenses from "./components/Expenses";


function App() {
  const expenses = [
    {
     id: 'e1',
     title: 'Toilet Paper',
     amount: 94.12,
     date: new Date(2020, 7, 14),

  },
  {
     id: 'e2',
     title: 'New TV',
     amount: 799.49,
     date: new Date(2021, 2,12),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2,12),
 }
  ]
  return (
    <div className="App">
      <Expenses />
    </div>
  );
}

export default App;
