import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    onAdd: (Item: Item) => void;
}

export const InputArea = ({ onAdd}: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2024, 4, 14),
            category:  'food',
            title: 'Item de teste',
            value: 2000

        };
        onAdd(newItem);
    }   

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}

