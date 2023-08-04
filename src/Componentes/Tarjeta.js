import './Tarjeta.css';

export default function Tarjeta ({animal}){
    
    return (
        <div className="ballena-franca">
            <img src={animal.imagen} alt=""/>
            <div className="franca-info">
                <h2>{animal.titulo}</h2>
                <p>{animal.descripcion}</p>
                <div className="franca-detalles">
                    <button className="mas-info">{animal.masInfo}</button>

                </div>
            </div>
        </div>
        )
}