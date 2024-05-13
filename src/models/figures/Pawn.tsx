import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'





export class Pawn extends Figure{

    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        const logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        super(color, cell, logo); // Передаем логотип в конструктор родительского класса
        this.name = FigureNames.PAWN; // Устанавливаем имя фигуры
    }



    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const firstStepDir = this.cell.figure?.color === Colors.BLACK ? 2 : -2

        if((
            target.y === this.cell.y + direction || this.isFirstStep 
            && (target.y === this.cell.y + firstStepDir))
            && target.x === this.cell.x 
            && this.cell.board.getCell(target.x, target.y).isEmpty()){
            return true
        }
        if(target.y === this.cell.y + direction
            && (target.x === this.cell.x + 1 || target.x ===this.cell.x - 1)
            && this.cell.isEnemy(target)
        ){
            return true
        }
        return false
    }
    moveFigure(target: Cell): void {
        super.moveFigure(target)
        this.isFirstStep = false
    }
}