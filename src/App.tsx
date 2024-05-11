import {useEffect, useState} from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
   
        {/*Aqui de informações*/}

        {/*Aqui de inserção*/}

        {/*Tabela de itens*/}
        <TableArea list={filteredList}/>

      </C.Body>
      <C.Footer>
        Desenvolvido por: Niceu Biriba
      </C.Footer>
    </C.Container>
  );
}

export default App;