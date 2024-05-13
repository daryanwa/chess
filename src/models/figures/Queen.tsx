import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        const logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        super(color, cell, logo); // Передаем логотип в конструктор родительского класса
        this.name = FigureNames.QUEEN; // Устанавливаем имя фигуры
    }

    
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }

        if (!target.isEmpty() && target.figure?.color === this.color) {
            return false;
        }

        if(this.cell.isEmptyVertical(target)){
            return true
        }
        if(this.cell.isEmptyHorizontal(target)){
            return true
        }
        if(this.cell.isEmptyDiagonal(target)){
            return true
        }

        return false
    }
}
