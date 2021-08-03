import "./styles.css";
const currentDate = new Date();
const year = currentDate.getFullYear();
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox Copyright &copy; {year}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img
        src="https://www.aspca.org/sites/default/files/cat-care_destructive-scratching_main-image.jpg"
        alt="yes"
      />
    </div>
  );
}
