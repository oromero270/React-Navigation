import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../components/Search';

function Home() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [numEmployees, setNumEmployees]= useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [players, setPlayers] =useState([]);
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let player = {name, color, numE: numEmployees, imgUrl}
        setPlayers(oldPlayers => [...oldPlayers,player]);
        setName("");
        setColor ("");
        setNumEmployees(0);
        setImgUrl("");
    }
    return (
        < >
        <Search
                search= {search}
                handleSearch={setSearch}
        />
        <div className='home row justify-contnet-around'>
            <form className="col-5" onSubmit={(e)=> handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="color">color:</label>
                    <input
                    type="text"
                    className="form-control"
                    name="color"
                    value={color}
                    onChange = {(e) => setColor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numEmployees">Num employees:</label>
                    <input
                    type="number"
                    className="form-control"
                    name="numEmployees"
                    value={numEmployees}
                    onChange = {(e) => setNumEmployees(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imgUrl">Img Url:</label>
                    <input
                    type="text"
                    className="form-control"
                    name="imgUrl"
                    value={imgUrl}
                    onChange = {(e) => setImgUrl(e.target.value)}
                    />
                </div>
                <input 
                type="submit" 
                value="submit"
                className="btn btn-warning"
                />
            </form>
            <div className="col-5">
                {
                    players.filter(h =>h.name.includes(search)).map((player,idx) =>{
                        return  <div className="card" key={idx}>
                                    <img className="card-img-top" src={player.imgUrl} alt="card img"></img>
                                    <div className="card-body">
                                        <h3 className="card-title">{player.name}</h3>
                                        <p className="card-text"> Emp: {player.numE}</p>
                                        <p className="card-text"> Color: {player.color}</p>
                                    </div>
                                </div>
                    })
                }
            </div>
            
        </div>
        </>
    )
}

export default Home;
