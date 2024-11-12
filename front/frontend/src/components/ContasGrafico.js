import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getContas } from '../services/apiService';

// Registrar os componentes diretamente no ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ContasGrafico = () => {
    const [contasPagas, setContasPagas] = useState(0);
    const [contasNaoPagas, setContasNaoPagas] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getContas();
                const pagas = response.data.filter(conta => conta.paga).length;
                const naoPagas = response.data.filter(conta => !conta.paga).length;
                
                setContasPagas(pagas);
                setContasNaoPagas(naoPagas);
            } catch (error) {
                console.error("Erro ao buscar contas:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Carregando dados...</p>;

    const data = {
        labels: ['Pagas', 'Não Pagas'],
        datasets: [
            {
                label: 'Contas',
                data: [contasPagas, contasNaoPagas],
                backgroundColor: ['#4CAF50', '#FF5722'],
            },
        ],
    };

    return (
        <div>
            <h2>Status das Contas</h2>
            <Bar data={data} />
        </div>
    );
};

export default ContasGrafico;
