import './App.css';
import Header from '../../myproject/src/component/header/header';
import Topcontainer from '../../myproject/src/component/topcontainer/topcontainer';
import Skillset from '../../myproject/src/component/skillset/skillset';
import ProjectContainer from './component/projectcontainer/Projectcontainer';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillset/>
      <ProjectContainer/>
      <Contact />
    </div>
  );
}

export default App;
