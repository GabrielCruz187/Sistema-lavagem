import React, { useEffect, useState } from 'react';
import { getAnotacoes, addAnotacao } from '../services/apiService';

const Anotacoes = () => {
    const [anotacoes, setAnotacoes] = useState([]);
    const [novaAnotacao, setNovaAnotacao] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAnotacoes();
                setAnotacoes(response.data);
            } catch (error) {
                console.error("Erro ao buscar anotações:", error);
            }
        };
        fetchData();
    }, []);

    const handleAddAnotacao = async () => {
        if (!novaAnotacao) return; // Evita adicionar uma anotação em branco

        try {
            const response = await addAnotacao({ texto: novaAnotacao });
            setAnotacoes([...anotacoes, response.data]); // Atualiza a lista
            setNovaAnotacao(''); // Limpa o campo de entrada
        } catch (error) {
            console.error("Erro ao adicionar anotação:", error);
        }
    };

    return (
        <div>
            <h1>Sistema de Lavagem de Carros</h1>
            <h2>Anotações Diárias</h2>

            {/* Formulário para adicionar nova anotação */}
            <input
                type="text"
                placeholder="Digite uma nova anotação"
                value={novaAnotacao}
                onChange={(e) => setNovaAnotacao(e.target.value)}
            />
            <button onClick={handleAddAnotacao}>Adicionar Anotação</button>

            <ul>
                {anotacoes.map(anotacao => (
                    <li key={anotacao.id}>
                        {anotacao.texto} - {anotacao.data}
                        {/* Botões para editar e excluir podem ser adicionados aqui */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Anotacoes;
