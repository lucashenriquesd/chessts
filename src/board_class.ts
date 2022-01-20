import { Piece } from "./piece_class";
import { Rook } from "./rook_class";
import { Knight } from "./knight_class";
import { Bishop } from "./bishop_class";
import { Queen } from "./queen_class";
import { King } from "./king_class";
import { Pawn } from "./pawn_class";

export class Board {
    pieces: Piece[];
    design: string[][] = [
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "],
        ["    ", "    ", "    ", "    ", "    ", "    ", "    ", "    "]
    ];

    team_white_victories: number = 0;
    team_black_victories: number = 0;

    constructor(pieces: Piece[]) {
        this.pieces = pieces;
    }

    getPieces(): Piece[] {
        return this.pieces;
    }

    getPiecesDescriptions(): void {
        for (let piece of this.pieces) {
            console.log(piece.getDescription());
        }
    }

    translateChessposToArray(chesspos: string): number[] {
        let chesspos1: string = chesspos.substring(0, 1);
        let chesspos2: string = chesspos.substring(1, 2);

        let chesspos1_fmt: number;
        let chesspos2_fmt: number;

        switch (chesspos1) {
            case "a":
            chesspos1_fmt = 0;
            break;
            case "b":
            chesspos1_fmt = 1;
            break;
            case "c":
            chesspos1_fmt = 2;
            break;
            case "d":
            chesspos1_fmt = 3;
            break;
            case "e":
            chesspos1_fmt = 4;
            break;
            case "f":
            chesspos1_fmt = 5;
            break;
            case "g":
            chesspos1_fmt = 6;
            break;
            case "h":
            chesspos1_fmt = 7;
            break;
        
            default:
                break;
        }

        switch (chesspos2) {
            case "1":
            chesspos2_fmt = 7;
            break;
            case "2":
            chesspos2_fmt = 6;
            break;
            case "3":
            chesspos2_fmt = 5;
            break;
            case "4":
            chesspos2_fmt = 4;
            break;
            case "5":
            chesspos2_fmt = 3;
            break;
            case "6":
            chesspos2_fmt = 2;
            break;
            case "7":
            chesspos2_fmt = 1;
            break;
            case "8":
            chesspos2_fmt = 0;
            break;
        
            default:
                break;
        }

        return [chesspos2_fmt, chesspos1_fmt];
    }

    translateArrayToChesspos(chesspos: number[]): string {
        let chesspos1: number = chesspos[0];
        let chesspos2: number = chesspos[1];

        let chesspos1_fmt: string;
        let chesspos2_fmt: string;

        switch (chesspos1) {
            case 7:
            chesspos1_fmt = "1";
            break;
            case 6:
            chesspos1_fmt = "2";
            break;
            case 5:
            chesspos1_fmt = "3";
            break;
            case 4:
            chesspos1_fmt = "4";
            break;
            case 3:
            chesspos1_fmt = "5";
            break;
            case 2:
            chesspos1_fmt = "6";
            break;
            case 1:
            chesspos1_fmt = "7";
            break;
            case 0:
            chesspos1_fmt = "8";
            break;
        
            default:
                break;
        }

        switch (chesspos2) {
            case 0:
            chesspos2_fmt = "a";
            break;
            case 1:
            chesspos2_fmt = "b";
            break;
            case 2:
            chesspos2_fmt = "c";
            break;
            case 3:
            chesspos2_fmt = "d";
            break;
            case 4:
            chesspos2_fmt = "e";
            break;
            case 5:
            chesspos2_fmt = "f";
            break;
            case 6:
            chesspos2_fmt = "g";
            break;
            case 7:
            chesspos2_fmt = "h";
            break;
        
            default:
                break;
        }

        return chesspos2_fmt + chesspos1_fmt;
    }

    pieceFactory(type: string, team: string, chesspos: string): Piece {
        let pieceToBePushed: Piece;
        switch (type) {
            case "Pawn":
                pieceToBePushed = new Pawn(type, team, this.translateChessposToArray(chesspos));
                break;
            case "Rook":
                pieceToBePushed = new Rook(type, team, this.translateChessposToArray(chesspos));
                    break;
            case "Knight":
                pieceToBePushed = new Knight(type, team, this.translateChessposToArray(chesspos));
                break;
            case "Bishop":
                pieceToBePushed = new Bishop(type, team, this.translateChessposToArray(chesspos));
                break;
            case "Queen":
                pieceToBePushed = new Queen(type, team, this.translateChessposToArray(chesspos));
                break;
            case "King":
                pieceToBePushed = new King(type, team, this.translateChessposToArray(chesspos));
                break;
            default:
                break;
        }
        return pieceToBePushed;
    }

    kill(piece: Piece): void {
        // Algorithm to remove from the list
        var index = this.pieces.indexOf(piece, 0);
        if (index > -1) {
           this.pieces.splice(index, 1);
        }
        // Call kill from piece
        piece.kill();
    }

    promote(piece: Pawn, new_rank: string): void {
        if (piece instanceof Pawn) {
            if(new_rank !== "King") {
                if (piece.getTeam() == "White") {
                    if (piece.getPosition()[0] == 0) {
                        console.log(piece.getDescription() + " have been promoted to " + new_rank);
                        let promotedPiece = this.pieceFactory(new_rank, piece.getTeam(), this.translateArrayToChesspos(piece.getPosition()));
                        this.pieces.push(promotedPiece);
                        this.kill(piece);
                        this.makeBoard();
                        this.showBoard();
                    } else {
                        console.log("Your Pawn is still not able to be promoted");
                    }
                } else {
                    if (piece.getPosition()[0] == 7) {
                        console.log(piece.getDescription() + " have been promoted to " + new_rank);
                        piece.setType(new_rank);
                        this.makeBoard();
                        this.showBoard();
                    } else {
                        console.log("Your Pawn is still not able to be promoted");
                    }
                }
            } else {
                console.log("You cannot promote to a king");
            }
        } else {
            console.log("Only Pawns can be promoted");
        }
    }

    movePiece(pos1: string, pos2: string): void {
        let pos1_fmt: number[] = this.translateChessposToArray(pos1);
        let pos2_fmt: number[] = this.translateChessposToArray(pos2);
        let piece: Piece = this.getPieceByPos(pos1_fmt);

        let valid_moves: number[][] = this.getValidMoves(piece);

        for (let valid_move of valid_moves) {
            if (valid_move.toString() === pos2_fmt.toString()) {
                let target: Piece = this.getPieceByPos(pos2_fmt);
                if (target != null) {
                    console.log(target.getDescription() + " has just been killed.");
                    target.kill();
                }
                piece.setPosition(pos2_fmt);
                console.log("Moved " + piece.getTeam() + " " + piece.getType() + " from " + pos1 + " to " + pos2);
            }
        }

        if (piece.getPosition().toString() === pos1_fmt.toString()) {
            console.log("Invalid move!");
            console.log("Try one of these: ");
            let array_to_chesspos_moves: string[] = [];
            for (let valid_move of valid_moves) {
                array_to_chesspos_moves.push(this.translateArrayToChesspos(valid_move));
            }
            console.log(array_to_chesspos_moves);
        }

        this.checkGameOver();
    }

    checkGameOver(): void {
        for (let piece of this.pieces) {
            if (piece.getType() === "King" && piece.dead) {
                for (let piece2 of this.pieces) {
                    piece2.setPosition(piece2.getInitialPosition());
                    piece2.revive();
                }
                let team_won: string = "White";
                this.team_white_victories++;
                if (piece.getTeam() === "White") {
                    team_won = "Black";
                    this.team_white_victories--;
                    this.team_black_victories++;
                }
                console.log("Game is over! Team " + team_won + " has won the game!");
                console.log("Team White with " + this.team_white_victories);
                console.log("Team Black with " + this.team_black_victories);
                console.log("\nStarting new game.");
                this.resetBoard();
            }
        }
    }

    getValidMoves(piece: Piece): number[][] {
        let all_pieces_pos: number[][] = this.getAllPiecesPos();
        let all_possible_pos_with_collision: number[][] = [];
        let collided_positions: number[][]= [];
        let all_possible_pos: number[][] = [];
        if (piece.getType() == "Pawn") {
            return all_possible_pos_with_collision = piece.getValidMoves(this.pieces, this.design);
        }

        if (piece.getType() == "Bishop") {
            return all_possible_pos_with_collision = piece.getValidMoves(this.pieces, this.design);
        }

        if (piece.getType() == "Rook") {
            return all_possible_pos_with_collision = piece.getValidMoves(this.pieces, this.design);
        }

        if (piece.getType() == "Knight") {
            return all_possible_pos_with_collision = piece.getValidMoves(this.pieces, this.design);
        }

        if (piece.getType() == "Queen") {
            return all_possible_pos_with_collision = piece.getValidMoves(this.pieces, this.design);
        }

        if (piece.getType() == "King") {
            return all_possible_pos_with_collision = piece.getValidMoves(this.pieces, this.design);
        }
        return all_possible_pos_with_collision;
    }

    getAllPiecesPos(): number[][] {
        let pos: number[][] = [];
        for (let piece of this.pieces) {
            pos.push(piece.getPosition());
        }
        return pos;
    }

    getPieceByPos(pos: number[]): Piece {
        let found_piece: Piece = null;
        for (let piece of this.pieces) {
            if (piece.getPosition().toString() === pos.toString()) {
                found_piece = piece;
            }
        }
        return found_piece;
    }

    makeBoard(): void {
        this.resetBoard();
        for (let i = 0; i < this.design.length; i++) {
            for (let j = 0; j < this.design[i].length; j++) {
                let piece: Piece = this.getPieceByPos([i, j]);
                if (piece != null && !piece.dead) {
                    this.design[i][j] = piece.getTeam().substring(0, 1).toLowerCase() + piece.getType().substring(0, 2) + " ";
                }
            }
        }
    }

    previewMovement(chesspos: string): void {
        let current_piece = this.isValidPlacementAndOrPiece(chesspos);
        if(current_piece !== null) {
            this.makeBoard();
            let validMoves = this.getValidMoves(current_piece);
            for (let i = 0; i < this.design.length; i++) {
                for (let j = 0; j < this.design[i].length; j++) {
                    for (let selmove of validMoves) {
                        if (selmove.toString() === [i, j].toString()) {
                            this.design[i][j] = this.design[i][j].substring(0, this.design[i][j].length - 1) + "X";
                        }
                    }
                    
                    if (current_piece.getPosition().toString() === [i, j].toString()) {
                        this.design[i][j] = current_piece.getTeam().substring(0, 1).toLowerCase() + current_piece.getType().substring(0, 2) + " ";
                    }
                }
            }
        } else {
            console.log("Incorrect placement or no Piece found");
        }
        this.showBoard();
    }

    isValidPlacementAndOrPiece(chesspos: string): Piece {
        let current_chesspos = this.translateChessposToArray(chesspos);
        if (!isNaN(current_chesspos[0]) && !isNaN(current_chesspos[1])) {
            let current_piece = this.getPieceByPos(current_chesspos);
            if (current_piece != null) {
                return current_piece;
            }
            return null;
        }
    }

    resetBoard(): void {
        for (let i = 0; i < this.design.length; i++) {
            for (let j = 0; j < this.design[i].length; j++) {
                this.design[i][j] = "    ";
            }
        }
    }

    showBoard(): void {
        console.log(this.design);
    }
}