import { Cell } from "./Cell"
import { Colors } from "./Color"
import { Bishop } from "./figures/Bishop";
import { Figure } from "./figures/Figure";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";



export class Board {
    cells: Cell[][] = [];
    lostBlackFigures: Figure[] = []
    lostWhiteFigures: Figure[] = []

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) { // Изменил i на j
                if ((i + j) % 2 !== 0) { // Поменял / на % и !== на !===
                    row.push(new Cell(this, j, i, Colors.BLACK, null)); //black cell
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)); //white cell
                }
            }
            this.cells.push(row);
        }
    }



    public highlightCells(selectedCell: Cell | null){
        for(let i = 0; i<this.cells.length; i++){
            const row = this.cells[i]
            for(let j = 0; j <row.length; j++ ){
                let target = row[j]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }


    public getCopyBoard(): Board{
        const newBoard = new Board()
        newBoard.cells = this.cells
        newBoard.lostBlackFigures = this.lostBlackFigures
        newBoard.lostWhiteFigures = this.lostWhiteFigures
        return newBoard
    }


    public getCell(x: number, y: number){
        return this.cells[x][y]
    }

    public addFigures(){
        this.addBishops()
        this.addKings()
        this.addKnights()
        this.addRooks()
        this.addQueens()
        this.addPawns()
    }

    private addPawns(){
        for(let i = 0; i < 8; i++){
            new Pawn(Colors.BLACK, this.getCell(1, i))
            new Pawn(Colors.WHITE, this.getCell(6, i))
        }
    }
    private addKings(){
        new King(Colors.BLACK, this.getCell(0, 4))
        new King(Colors.WHITE, this.getCell(7, 4))
    }
    private addKnights(){
        new Knight(Colors.BLACK, this.getCell(0, 1))
        new Knight(Colors.BLACK, this.getCell(0, 6))
        new Knight(Colors.WHITE, this.getCell(7, 1))
        new Knight(Colors.WHITE, this.getCell(7, 6))
    }
    private addRooks(){
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.BLACK, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 0))
        new Rook(Colors.WHITE, this.getCell(7, 7))
    }
    private addQueens(){
        new Queen(Colors.BLACK, this.getCell(0, 3))
        new Queen(Colors.WHITE, this.getCell(7, 3))
    }
    private addBishops(){
        new Bishop(Colors.BLACK, this.getCell(0, 2))
        new Bishop(Colors.BLACK, this.getCell(0, 5))
        new Bishop(Colors.WHITE, this.getCell(7, 2))
        new Bishop(Colors.WHITE, this.getCell(7, 5))
    }
    


}
