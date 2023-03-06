import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <h1>Página Não encontrada</h1>

            <Link to="/"> Voltar Para Home</Link> 
        </div>
    );
}