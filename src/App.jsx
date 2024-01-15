
import UserGreeting from "./UserGreeting";


function App() {
  return (
    <>
    <UserGreeting isLoggedIn={true} username="Erkesha"/>
    <UserGreeting isLoggedIn={false} username="Erkesha"/>
    <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App;
