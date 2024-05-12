import {useEffect, useState} from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InforArea } from './components/InforArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);



  const hadleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro Pessoal</C.HeaderText>
      </C.Header>
      <C.Body>
   
        {/*Aqui de informações*/}

        {/*Aqui de inserção*/}
        <InforArea 
        currentMonth={currentMonth}
        onMonthChange={hadleMonthChange}
        income={income}
        expense={expense}
        />
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