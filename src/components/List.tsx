import { Trash, Circle } from 'phosphor-react';
import { useState } from 'react';
import './list.scss'


interface ShowMessageProps {
    ShowText?: string;
    isChecked?: boolean;
    onDeleteTask?: (textNewTask: string, isChecked: boolean) => void;
    onCheckTask?: (textNewTask: string, isChecked: boolean) => void;
}

export function List({ ShowText, isChecked, onCheckTask, onDeleteTask }: ShowMessageProps) {

    const [isChecked2, setIsChecked] = useState(false)

    function VerifyCheck() {
        setIsChecked(!isChecked2)
        onCheckTask!(ShowText!, !isChecked)
    }

    function DeleteTask() {
        onDeleteTask!(ShowText!, isChecked!)
    }

    return (
        <aside className={`lists ${isChecked ? 'checked' : ''}`}>

            {isChecked2 === false ?
                <Circle className='notCheckCicle' size={17.45} onClick={VerifyCheck} /> :
                <svg className='checkCicle' onClick={VerifyCheck} xmlns="http://www.w3.org/2000/svg" width="17.45" height="17.45"
                    fill="#000000" viewBox="0 0 256 256"><rect width="256"
                        height="256" fill="none"></rect><circle className='checkCicle' cx="128" cy="128" r="96" fill="#5E60CE" stroke="#5E60CE"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><polyline points="172 104 113.3 160 84 132"
                                fill="none" stroke="#F2F2F2" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="16"></polyline></svg>}

            {isChecked2 ? <label className='lineThrought'>{ShowText}</label> : <label >{ShowText}</label>}

            <Trash className='trash' size={24} onClick={DeleteTask} />
        </aside>
    )
}
