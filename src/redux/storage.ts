
interface Cell_I {
    index: number,
    value: string,
    isCrossed: boolean
}


export const cellData: Array<Cell_I> = Array.from({length: 9}, (v,k) => {
    return {
        index: k,
        value: '',
        isCrossed: false
    }
    })

    

export const addCellData = (value: string, index: number): void => { cellData[index].value = value; console.log(cellData) };

export const cleanAllCellData = (): void  => {
    cellData.length = 0;
}
//Возможно методы управления базой вынести в отедльную папку