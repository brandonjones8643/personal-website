function App() {
  return (
    <div className="app">
      <div className="title-and-image-container">
        <div className="title-and-image">
          <img src="img.jpg" alt="profileimage" />
          <h2>Brandon Jones</h2>
        </div>
      </div>
      <p className="description">Javascript Developer</p>
      <h3>Email:</h3>
      <p>BrandonJones8643@gmail.com</p>
      <h3>GitHub:</h3>
      <a href="https://github.com/brandonjones8643">Link to GitHub</a>
      <h3>Fiver:</h3>
      <a href="https://www.fiverr.com/s2/57c3564e95">Link to Fiverr</a>
      <h3>Technologies:</h3>
      <ul>
        <li>ReactJS</li>
        <li>Javascript</li>
        <li>Html</li>
        <li>CSS</li>
        <li>NodeJS</li>
        <li>React Native</li>
        <li>ElectronJS</li>
      </ul>
    </div>
  );
}

export default App;
