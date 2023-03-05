import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>Página Inicial</h1>

            <Link to="/sobre"> Sobre</Link> 
        </div>
    );
}