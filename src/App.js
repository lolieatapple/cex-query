import styled from 'styled-components'
import './App.css';

const KeyPanel = styled.div`
  height: auto;
  width: 900px;
  border-radius: 20px;
  margin: auto;
  background-image: radial-gradient(circle,  #b2b1d833, #b2b1d8);
  background-size:200% 200%;
  margin-top: 80px;
  padding-top: 5px;
`

const ConfigInput = styled.textarea`
  background-image: radial-gradient(circle,  #ffefb933, #ffefb9);
  background-size:200% 200%;
  width: 800px;
  height: 160px;
  border-radius: 20px;
  padding: 20px;
  border: none;
`

const Button = styled.button`
  width: 200px;
  height: 60px;
  margin: 20px;
  border-radius: 20px;
  border: none;
  background-image: radial-gradient(circle,  #ec779e33, #b2b1d8);
  background-size:200% 200%;
  color: #ec779e;
  cursor: pointer;
  :hover {
    background-image: radial-gradient(circle,  #ec779e33, #f5b8d3);
    background-size:200% 200%;
  }
`

const SmallButton = styled.button`
  margin: 15px;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-image: radial-gradient(circle,  #ec779e33, #f5b8d3);
  background-size:200% 200%;
  color: #ec779e;
  cursor: pointer;
  :hover {
    background-image: radial-gradient(circle,  #ec779e33, #b2b1d8);
    background-size:200% 200%;
  }
`

function App() {
  return (
    <div className="App">
      <div style={{marginBottom: "40px"}}>
        <span style={{width:"40px", padding:"20px", background:"#f5b8d3", border:"0px solid gray"}}></span>
        <span style={{width:"40px", padding:"20px", background:"#ec779e", border:"0px solid gray"}}></span>
        <span style={{width:"40px", padding:"20px", background:"#ffefb9", border:"0px solid gray"}}></span>
        <span style={{width:"40px", padding:"20px", background:"#b2b1d8", border:"0px solid gray"}}></span>
      </div>
      <h1>Exchange Query Tools</h1>
      <KeyPanel>
        <h2>Input Query Config:</h2>
        <ConfigInput placeholder={
`[
  {
    apiKey: "abc",
    secKey: "efg",
    type: "binance"
  },
  {
    apiKey: "abc",
    secKey: "efg",
    type: "huobi"
  },
  {
    apiKey: "abc",
    secKey: "efg",
    type: "kucoin"
  },
]`
          } />
        <SmallButton>Reset Cache</SmallButton>
        <SmallButton>Copy Example</SmallButton>
      </KeyPanel>
      <Button>
        <h2>Start Query</h2>
        
        </Button>
    </div>
  );
}

export default App;
