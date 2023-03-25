import DetailedOrder from "./screens/DetailedOrder";

function App() {
  return (
    <>
      <DetailedOrder />
    </>
  );
}

const styles = {
  totalContainer: {
    display: "flex",
    flexDirection: "row",
  },
  price: {
    marginLeft: "auto",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 50,
    paddingBottom: 30
  },
  button: {
    marginRight: 20,
    marginLeft: 20
  }
}

export default App;
