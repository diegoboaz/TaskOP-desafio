// Seu componente Painel
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from './home.module.scss';

export default function Painel() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function handleComplete(taskId) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Meu Painel de Tarefas</title>
            </Head>
            <main>
                <h1>Tarefas:</h1>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <span className={task.completed? styles.completed : ''}>
                                {task.title}
                            </span>
                            {!task.completed && (
                                <button
                                    className={styles['complete-button']}
                                    onClick={() => handleComplete(task.id)}
                                >
                                    Concluir
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
