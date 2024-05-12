import { formatMonth } from '../../helpers/dateFilter';
import * as C from './styles';
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income : number;
    expense: number;
}

export const InforArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
    const hadlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

    }

    const hadleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

    }
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={hadlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={hadleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Gasto" value={expense}/>
                <ResumeItem 
                    title="Balanço" 
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}/>
            </C.ResumeArea>
        </C.Container>

);
}