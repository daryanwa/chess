import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure{
    constructor(color: Colors, cell: Cell) {
        const logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        super(color, cell, logo); // Передаем логотип в конструктор родительского класса
        this.name = FigureNames.BISHOP; // Устанавливаем имя фигуры
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true
        }
        return false
    }
}