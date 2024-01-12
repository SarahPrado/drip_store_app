import axios from 'axios';
import React, { useEffect } from 'react'

const ProdutosAlta = () => {

    const getProdutos = async () => {
        try {
            const response = await axios.get(
                `https://dc-store-api-0kd6.onrender.com/api/produto`
            );
            console.log("Achou Produtos", response);
        } catch (error) {
            console.log('Erro ao buscar os produtos', error);
        }
    }
    
    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <div>
            Oie - Produtos em Alta aqui
        </div>
    )
}

export default ProdutosAlta
