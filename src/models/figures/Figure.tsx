import { Colors } from "../Color";
import { Cell } from "../Cell";



export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Королева',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}


export class Figure {
    color: Colors;
    logo: string | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell, logo: string | null) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = logo ;
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(target: Cell): boolean{
        if(target.figure?.color === this.color){
            return false
        }
        if(target.figure?.name === FigureNames.KING){
            return false
        }
        return true
    }
    moveFigure(target: Cell){

    }

}