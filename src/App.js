import './App.css';
import Childr from "./components/Childr.js"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.png"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
function App() {
  return (
    <div className="App">
      <Childr head="Let's Collaborate" cls="img1" heading="AI + RPA is what we do" desc="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience" bottomdesc="AI + RPA Automation →" imgA={img1}/>
      <Childr  heading="Make Bolder Choices" cls="img2" desc="Digital focused strategies to realize market-changing ideas" bottomdesc="Build Better Apps →" imgA={img2}/>
      <Childr  heading="Innovate with Speed" cls="img3" desc="Create higher quality software, deliver on customer expectations and business goals" bottomdesc="DevOps →" imgA={img3}/>
      
      <Childr  heading="Embrace Cloud" cls="img4" desc="With Cloud-First accelerate innovation and optimize performance" bottomdesc="Cloud Services →" imgA={img4}/>
    </div>
  );
}

export default App;
