import React, { useEffect, useState } from 'react';
import { getAnotacoes, addAnotacao, updateAnotacao, deleteAnotacao } from '../services/apiService';

const Anotacoes = () => {
    const [anotacoes, setAnotacoes] = useState([]);
    const [novaAnotacao, setNovaAnotacao] = useState('');
    const [editandoAnotacao, setEditandoAnotacao] = useState(null);
    const [textoEditado, setTextoEditado] = useState('');

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
        if (!novaAnotacao) return;
        try {
            const response = await addAnotacao({ texto: novaAnotacao });
            setAnotacoes([...anotacoes, response.data]);
            setNovaAnotacao('');
        } catch (error) {
            console.error("Erro ao adicionar anotação:", error);
        }
    };

    const handleDeleteAnotacao = async (id) => {
        try {
            await deleteAnotacao(id);
            setAnotacoes(anotacoes.filter(anotacao => anotacao.id !== id));
        } catch (error) {
            console.error("Erro ao excluir anotação:", error);
        }
    };

    const handleEditAnotacao = (anotacao) => {
        setEditandoAnotacao(anotacao);
        setTextoEditado(anotacao.texto);
    };

    const handleUpdateAnotacao = async () => {
        if (!textoEditado) return;
        try {
            const response = await updateAnotacao(editandoAnotacao.id, { texto: textoEditado });
            setAnotacoes(anotacoes.map(anotacao =>
                anotacao.id === editandoAnotacao.id ? response.data : anotacao
            ));
            setEditandoAnotacao(null);
            setTextoEditado('');
        } catch (error) {
            console.error("Erro ao atualizar anotação:", error);
        }
    };

    return (
        <div>
            <h1>Sistema de Lavagem de Carros</h1>
            <h2>Anotações Diárias</h2>

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
                        {editandoAnotacao?.id === anotacao.id ? (
                            <>
                                <input
                                    type="text"
                                    value={textoEditado}
                                    onChange={(e) => setTextoEditado(e.target.value)}
                                />
                                <button onClick={handleUpdateAnotacao}>Salvar</button>
                                <button onClick={() => setEditandoAnotacao(null)}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                {anotacao.texto} - {anotacao.data}
                                <button onClick={() => handleEditAnotacao(anotacao)}>Editar</button>
                                <button onClick={() => handleDeleteAnotacao(anotacao.id)}>Excluir</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Anotacoes;
