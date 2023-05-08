import './App.css';
import Navbar from './components/Navbar'
import Carousels from './components/Carousels'
function App() {
  return (
    <>
  
{/* <Navbar title="TextUtils" aboutText="About Us"></Navbar>
 */}
 <Navbar title="TextUtils"></Navbar>
 <div className='container' style={{marginTop:"50px"}}>
  <h1 className='text-center'>What Is Artificial Intelligence?</h1><br />
    <h5>Artificial Intelligence, or AI, is a branch of computer science that emphasises the creation of intelligent machines that behave like humans. The method of creating smart machines, also known as intelligent machines, is designed to assist in the decision-making process, which is analysed in detail using data available within an enterprise. It works in the same manner as humans do when synthesising data and making reasonable decisions. However, in this situation, the decision is made after reviewing a large amount of data.</h5>
 </div>
 <div className='container'><h1>Artificial Intelligence And Machine Learning Improves User Experience.</h1>
<h5>AI does not necessitate the use of a different app or device. It enhances the intelligence of the services we use on a daily basis.

A mix of AI technology, such as chatbots, emulation, and virtual assistants like Google Assistant, is helping to increase user experience by incorporating many helpful features to an existing app.</h5></div>
        <div className="container" style={{padding:"auto"}}>
          <div className="container">
        <div className="container">
          <Carousels 
          img1="AI1.jpg"
          img2="pexels-pavel-danilyuk-8439093.jpg"
          img3="pexels-pavel-danilyuk-8438918.jpg"
          img4="pexels-pavel-danilyuk-8439093.jpg"
        /></div>
        </div>
        </div>
    </>
  );
}

export default App;
