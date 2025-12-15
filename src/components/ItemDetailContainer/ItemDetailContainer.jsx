import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { getProductsById } from "../../services/products";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);
        setDetail({});

        getProductsById(id)
        .then ((data) => setDetail(data))
        .catch ((err) => {
            console.error("Error al obtener el detalle:", err);
            setError(err.message || "Error al conectar con el servicio.");
        })
        .finally(() => setLoading(false));

    }, [id]);

    return (
        <main>
            {loading && <p>Cargando detalles del producto...</p>} 
            
            {error && <p style={{ color: 'red' }}>Ocurrió un error: {error}</p>}
            
            {!loading && !error && Object.keys(detail).length > 0 && (
                <ItemDetail detail={detail} />
            )}
        </main>
    );
};