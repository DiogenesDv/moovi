import Header_logo from './Components/Components_LogoTop_Footer/Header_logo';
import Footerr from './Components/Components_LogoTop_Footer/Footer';
import TelaComoPagar from './Components/Paginas_Principais/TelaComoPagar';
import TelaQR from './Components/Paginas_Principais/TelaQR';
import TelaCartaoPagamento from './Components/Paginas_Principais/TelaCartaoPagamento';




function App() {
  return (
    <>
      <Header_logo />

      <TelaCartaoPagamento/>

      <Footerr />

      {/*
      <TelaComoPagar />
      <TelaQR/>
      
    */}
    </>
  );
}

export default App;
