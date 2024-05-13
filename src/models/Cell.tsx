import { Board } from "./Board";
import { Colors } from "./Color";
import { Figure } from "./figures/Figure";

export class Cell{
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board ;
    available: boolean;
    id: number;

    constructor(board: Board, x:number, y: number, color: Colors, figure: Figure | null){
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.id = Math.random();
        this.available = false;
    }
    isEmpty(){
        return this.figure === null
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x ) {
            return false;
        }
    
        const minY = Math.min(this.y, target.y);
        const maxY = Math.max(this.y, target.y);
        for (let y = minY + 1; y < maxY; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false; 
            }
        }
    
        return true; // Вертикальный ход королевой допустим
    }

    isEmptyHorizontal(target:Cell): boolean{
        if (this.y !== target.y) {
            return false;
        }
    
        const minX = Math.min(this.x, target.x);
        const maxX = Math.max(this.x, target.x);
        for (let x = minX + 1; x < maxX; x++) {
            if (!this.board.getCell(this.y, x).isEmpty()) {
                return false; 
            }
        }
    
        return true; // Вертикальный ход королевой допустим
    }
    isEnemy(target: Cell): boolean{
        if(target.figure){
            return this.figure?.color !== target.figure.color
        }
        return false
    }
    
    isEmptyDiagonal(target:Cell): boolean{
        const absX = Math.abs(target.x - this.x)
        const absY = Math.abs(target.y - this.y)
        if(absY !== absX){
            return false
        }
        const dy = this.y < target.y ? 1 : -1
        const dx = this.x < target.x ? 1 : -1
        for(let i = 1; i < absY; i++){
            if(!this.board.getCell(this.x + dx*i, this.y + dy*i).isEmpty()){
                return false
            }
        }
        return true
    }


    setFigure(figure: Figure){
        this.figure = figure
        this.figure.cell = this
    }

    addLostFigure(figure: Figure){
        figure.color === Colors.BLACK
        ? this.board.lostBlackFigures.push(figure)
        : this.board.lostWhiteFigures.push(figure)
    }

    moveFigure(target: Cell){
        if(this.figure && this.figure?.canMove(target)){
            this.figure.moveFigure(target)
            if(target.figure){
                this.addLostFigure(target.figure)
            }
            target.setFigure(this.figure)
            this.figure = null
        }
    }

}