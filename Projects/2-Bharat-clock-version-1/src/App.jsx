import ClockHeading from './components/clockHeading.jsx'
import ClockSlogan from './components/clockslogan.jsx'
import CurrentTime from './components/CurrentTime.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return <center>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
  </center>
}
export default App;
  