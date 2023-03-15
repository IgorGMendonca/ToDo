import './newTask.scss'

import clipboard from '../media/Clipboard.png'

import { PlusCircle } from "phosphor-react";

import { useEffect, useState } from 'react';
import { Counter } from './Counter';
import { List } from './List';


export function NewTask() {

    const [counterCriate, setCounterCriate] = useState(0);
    const [counterFinished, setCounterFinished] = useState(0);
    const [arrayNewText, setArrayNewText] = useState<{ text: string, isChecked: boolean }[]>([])
    const [textNewTask2, setTextNewTask2] = useState('')
    const [disabeleButton, setDisabeleButton] = useState(true)

    function ChangeCounterValue() {
        if (arrayNewText.some(item => item.text.toLowerCase() === textNewTask2.toLowerCase())) {
            setTextNewTask2('')
            alert('Tarefa já existente')
        } else {
            setCounterCriate(counterCriate + 1);
            setArrayNewText([...arrayNewText, { text: textNewTask2, isChecked: false }])
            setTextNewTask2('');
        }
    }

    function handleTextNewTask(event: React.ChangeEvent<HTMLInputElement>) {
        setTextNewTask2(event.target.value)
    }


    function deleteTask(textNewTask2: string, isChecked: boolean) {
        setArrayNewText(arrayNewText.filter(item => item.text !== textNewTask2))
        setCounterCriate(counterCriate - 1);
        if (isChecked) {
            setCounterFinished(counterFinished - 1)
        }
    }

    function checkTask(textNewTask2: string, isChecked: boolean) {
        if (isChecked) {
            setCounterFinished(counterFinished + 1)
        } else {
            setCounterFinished(counterFinished - 1)
        }
        setArrayNewText(arrayNewText.map(item => item.text === textNewTask2 ? { ...item, isChecked } : item))
    }

    useEffect(() => {
        textNewTask2.length > 0 ? setDisabeleButton(false) : setDisabeleButton(true)
    }, [textNewTask2])


    return (
        <aside>
            <input type="text" placeholder="Adicione uma nova tarefa" onChange={handleTextNewTask} value={textNewTask2} />
            <button onClick={ChangeCounterValue} disabled={disabeleButton}>
                Criar <PlusCircle size={16} className='icon' />
            </button>

            <aside className='main'>
                <div className='CounterDiv'>
                    <Counter value={counterCriate} valueFinished={counterFinished} />
                </div>

                {counterCriate === 0 ?
                    <div className='toDoList'>
                        <img className='clipboard' src={clipboard}></img>
                        <aside className='texts'>
                            <label className='title'>Você ainda não tem tarefas cadastradas</label>
                            <label className="subtitle">Crie e organize seus itens a fazer</label>
                        </aside>
                    </div>
                    :
                    <div className='toDoListItens'>
                        {arrayNewText.map((item, index) => (
                            <List key={index} ShowText={item.text} isChecked={item.isChecked} onDeleteTask={deleteTask} onCheckTask={checkTask}></List>
                        ))}
                    </div>}
            </aside>
        </aside>
    )
}


