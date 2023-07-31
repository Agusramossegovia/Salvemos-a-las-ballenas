import './Tarjeta.css';

export default function Tarjeta (){
    const animal ={
        imagen: 'images/ballena-franca.jpg',
        titulo: 'Ballena franca',
        descripcion: 'Especie en peligro de extinsión',
        masInfo: 'mas informacion'
    }
    return (
        <div className="ballena-franca">
            <img src={animal.imagen} alt=""/>
            <div className="franca-info">
                <h2>{animal.titulo}</h2>
                <p>{animal.descripcion}</p>
                <div className="franca-detalles">
                    <p className="mas-info">{animal.masInfo}</p>
                </div>
            </div>
        </div>
        )
}