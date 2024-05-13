import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'



export class Knight extends Figure{
    constructor(color: Colors, cell: Cell) {
        const logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        super(color, cell, logo); // Передаем логотип в конструктор родительского класса
        this.name = FigureNames.KNIGHT; // Устанавливаем имя фигуры
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }

        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}