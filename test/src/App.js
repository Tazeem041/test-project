import './App.css';

function App() {
  return <div>
    <h1>Users</h1>
  <section className="container">
  <User name="Tazeem" job="UI DEV" location="Hybd"/>
  <User name="Shaik"  job="Engineer" location="Ong"/>
  <User name="Syed"   job="React Dev" location="Guntur"/>
  <User name="praveen" job="UI DEV" location="Hybd"/>
  <User name="jayanth"  job="Engineer" location="Ong"/>
  <User name="raghu"   job="React Dev" location="Guntur"/>
  </section>
      </div>
  
}

  function User(props) {
    return <div className="user name">
      <h3>{props.name}</h3>
      <p>job: {props.job}</p>
      <p>location: {props.location}</p>
    </div>
  }
export default App;
