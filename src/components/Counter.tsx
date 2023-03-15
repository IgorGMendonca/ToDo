import './counter.scss'

interface CounterProps {
    value?: number;
    valueFinished?: number;
}

Counter.defaultProps = {
    valueFinished: 0
};

export function Counter({ value, valueFinished }: CounterProps) {
    return (
        <aside className="counters">
            <div className="counter_create">
                <label >Tarefas Criadas</label>
                <label >{value === undefined ? 0 : value}</label>
            </div>

            <div className="counter_finished">
                <label >Concluídas</label>
                <label >{value === 0 ? 0 : ` ${valueFinished} de ${value}`}</label>
            </div>
        </aside>
    )
}