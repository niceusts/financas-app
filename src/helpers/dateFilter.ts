import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    const [year, month] = date.split('-').map(i => parseInt(i));

    for(let i in list) {
        if(
            list[i].date.getFullYear() === year &&
            (list[i].date.getMonth() + 1) === month
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}