import './App.css';
import primerJuego from './vip.jpg'

const App = () => {
  return (
    <div >
      <nav className='bg-warning'>
        <h1 className="text-3xl font-bold text-center py-7 text-white">Cura Games</h1>
      </nav>

<div className='container-fluid align '>
<div className='p-3 d-inline-block'>
<div className="card d-inline-block shadow-lg bg-dark text-light" >
<img src={primerJuego} class="card-img-top bg-dark p-3" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Mevtar</h5>
            <p className="card-text">
            Download:
            Click on the arrow and click show in folder,
              After the Mr.r.rar file right click and select Extract in "Mr.r/",
            It will ask you for a password and put clave:"misterr"
            </p>
            <a href="./Mr.R.zip" className="btn btn-outline-warning" download>Download</a>
      </div>
</div>
</div>


</div>

    </div>
  );
}
 
export default App;