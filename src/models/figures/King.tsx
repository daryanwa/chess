import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'


export class King extends Figure{

    
    constructor(color: Colors, cell: Cell) {
        const logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        super(color, cell, logo); // Передаем логотип в конструктор родительского класса
        this.name = FigureNames.KING; // Устанавливаем имя фигуры
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        if (!target.isEmpty() && target.figure?.color === this.color) {
            return false;
        }
        let diffX = Math.abs(this.cell.x - target.x)
        let diffY = Math.abs(this.cell.y - target.y)
        if(diffX <= 1 && diffY <= 1){
            return true
        }


        return false
    }
}