import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'


export class Rook extends Figure{
    constructor(color: Colors, cell: Cell){
        const logo = color === Colors.BLACK ? blackLogo : whiteLogo
        super(color, cell, logo)
        this.name = FigureNames.ROOK
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false
        }
        if(this.cell.isEmptyVertical(target)){
            return true
        }
        if(this.cell.isEmptyHorizontal(target)){
            return true
        }
        return false
        
    }
}