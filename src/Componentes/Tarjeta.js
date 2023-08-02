import './Tarjeta.css';

export default function Tarjeta ({animal}){
    
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