
// ?Component
// reactte componentler fonksiyon gibi yazılır ama html döndürürler.fonksiyondan farkı baş harfi büyük olur.ve bu fonksiyonlar jsx döndürürler.
function App() {
  
  
  // ?js kodu
  const deneme = "react"
  
  return (
    // ! Jsx(HTML-JS'nin birleşmiş halidir.)
    <div className="App">
     <h2 style={{color:"red"}}>Hoşgeldin Ya şehri react</h2>
     <p className="par">{deneme}</p>  
    </div>
  );
}

export default App;
