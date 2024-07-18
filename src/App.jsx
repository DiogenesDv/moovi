import Header_logo from './components/Header_logo';
import Footerr from './components/Footer';
import TelaComoPagar from './components/TelaComoPagar';
import TelaQR from './components/TelaQR';
import TelaCartaoPagamento from './components/TelaCartaoPagamento';




function App() {
  return (
    <>
      <Header_logo />

      <TelaComoPagar />

      <Footerr />

      {/* 
      <TelaQR/>
      <TelaCartaoPagamento/>
    */}
    </>
  );
}

export default App;
