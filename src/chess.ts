// declare function require(name: string);
// declare function process(name: any);

const readline = require("readline");

//import { readline } from "readline";
import { Board } from "./board_class";
import { Piece } from "./piece_class";
import { Rook } from "./rook_class";
import { Knight } from "./knight_class";
import { Bishop } from "./bishop_class";
import { Queen } from "./queen_class";
import { King } from "./king_class";
import { Pawn } from "./pawn_class";

const ctn_piece_white_king = 1;
const ctn_piece_white_queen = 1;
const ctn_piece_white_rook = 2;
const ctn_piece_white_bishop = 2;
const ctn_piece_white_knight = 2;
const ctn_piece_white_pawn = 8;

const ctn_piece_black_king = 1;
const ctn_piece_black_queen = 1;
const ctn_piece_black_rook = 2;
const ctn_piece_black_bishop = 2;
const ctn_piece_black_knight = 2;
const ctn_piece_black_pawn = 8;

const ctn_total_pieces_each = 16;
const ctn_total_pieces_board = 32;

let pieces: Piece[] = [];

let piece_black_rook1 = new Rook("Rook", "Black", [0, 0]);
pieces.push(piece_black_rook1);

let piece_black_knight1 = new Knight("Knight", "Black", [0, 1]);
pieces.push(piece_black_knight1);

let piece_black_bishop1 = new Bishop("Bishop", "Black", [0, 2]);
pieces.push(piece_black_bishop1);

let piece_black_king = new King("King", "Black", [0, 3]);
pieces.push(piece_black_king);

let piece_black_queen = new Queen("Queen", "Black", [0, 4]);
pieces.push(piece_black_queen);

let piece_black_bishop2 = new Bishop("Bishop", "Black", [0, 5]);
pieces.push(piece_black_bishop2);

let piece_black_knight2 = new Knight("Knight", "Black", [0, 6]);
pieces.push(piece_black_knight2);

let piece_black_rook2 = new Rook("Rook", "Black", [0, 7]);
pieces.push(piece_black_rook2);

let piece_black_pawn1 = new Pawn("Pawn", "Black", [1, 0]);
pieces.push(piece_black_pawn1);

let piece_black_pawn2 = new Pawn("Pawn", "Black", [1, 1]);
pieces.push(piece_black_pawn2);

let piece_black_pawn3 = new Pawn("Pawn", "Black", [1, 2]);
pieces.push(piece_black_pawn3);

let piece_black_pawn4 = new Pawn("Pawn", "Black", [1, 3]);
pieces.push(piece_black_pawn4);

let piece_black_pawn5 = new Pawn("Pawn", "Black", [1, 4]);
pieces.push(piece_black_pawn5);

let piece_black_pawn6 = new Pawn("Pawn", "Black", [1, 5]);
pieces.push(piece_black_pawn6);

let piece_black_pawn7 = new Pawn("Pawn", "Black", [1, 6]);
pieces.push(piece_black_pawn7);

let piece_black_pawn8 = new Pawn("Pawn", "Black", [1, 7]);
pieces.push(piece_black_pawn8);

// White

let piece_white_rook1 = new Rook("Rook", "White", [7, 0]);
pieces.push(piece_white_rook1);

let piece_white_knight1 = new Knight("Knight", "White", [7, 1]);
pieces.push(piece_white_knight1);

let piece_white_bishop1 = new Bishop("Bishop", "White", [7, 2]);
pieces.push(piece_white_bishop1);

let piece_white_king = new King("King", "White", [7, 3]);
pieces.push(piece_white_king);

let piece_white_queen = new Queen("Queen", "White", [7, 4]);
pieces.push(piece_white_queen);

let piece_white_bishop2 = new Bishop("Bishop", "White", [7, 5]);
pieces.push(piece_white_bishop2);

let piece_white_knight2 = new Knight("Knight", "White", [7, 6]);
pieces.push(piece_white_knight2);

let piece_white_rook2 = new Rook("Rook", "White", [7, 7]);
pieces.push(piece_white_rook2);

let piece_white_pawn1 = new Pawn("Pawn", "White", [6, 0]);
pieces.push(piece_white_pawn1);

let piece_white_pawn2 = new Pawn("Pawn", "White", [6, 1]);
pieces.push(piece_white_pawn2);

let piece_white_pawn3 = new Pawn("Pawn", "White", [6, 2]);
pieces.push(piece_white_pawn3);

let piece_white_pawn4 = new Pawn("Pawn", "White", [6, 3]);
pieces.push(piece_white_pawn4);

let piece_white_pawn5 = new Pawn("Pawn", "White", [6, 4]);
pieces.push(piece_white_pawn5);

let piece_white_pawn6 = new Pawn("Pawn", "White", [6, 5]);
pieces.push(piece_white_pawn6);

let piece_white_pawn7 = new Pawn("Pawn", "White", [6, 6]);
pieces.push(piece_white_pawn7);

pieces.push(new Pawn("Pawn", "White", [6, 7]));

let board = new Board(pieces);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Chessjs> "
});

console.log("Commands: showboard, mp a1 b3");

board.makeBoard();
board.showBoard();

rl.prompt();

rl.on('line', (line) => {
    // process.stdout.write('\x1B[2J\x1B[0f');
    let line_fmt: string = line.trim();

    if (line_fmt === "chesspos") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("chesspos")) {
        let translatedpos: number[] = board.translateChessposToArray(line_fmt.split(" ").pop());
        console.log(translatedpos);
    } else if (line_fmt === "mp") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("mp")) {
        let arg1_fmt: string = line_fmt.split(" ")[1];
        let arg2_fmt: string = line_fmt.split(" ")[2];
        if (arg1_fmt != null && arg2_fmt != null) {
            let current_chesspos = board.translateChessposToArray(arg1_fmt);
            if (!isNaN(current_chesspos[0]) && !isNaN(current_chesspos[1])) {
                let current_piece = board.getPieceByPos(current_chesspos);
                if (current_piece != null) {
                    board.movePiece(arg1_fmt, arg2_fmt);
                    board.makeBoard();
                    board.showBoard();
                } else {
                    console.log("Incorrect placement or no Piece found");
                }
            }
        }
    } else if (line_fmt === "promote") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("promote")) {
        let arg1_fmt: string = line_fmt.split(" ")[1];
        let arg2_fmt: string = line_fmt.split(" ")[2];
        if (arg1_fmt != null && arg2_fmt != null) {
            let current_chesspos = board.translateChessposToArray(arg1_fmt);
            if (!isNaN(current_chesspos[0]) && !isNaN(current_chesspos[1])) {
                let current_piece = board.getPieceByPos(current_chesspos);
                if (current_piece != null) {
                    board.promote(current_piece, arg2_fmt);
                } else {
                    console.log("Incorrect placement or no Piece found");
                }
            }
        }
    } else if (line_fmt === "pm") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("pm")) {
        let arg1_fmt: string = line_fmt.split(" ")[1];
        board.previewMovement(arg1_fmt);
    } else if (line_fmt === "dp") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("dp")) {
        let arg1_fmt: string = line_fmt.split(" ")[1];
        let current_chesspos = board.translateChessposToArray(arg1_fmt);
        let current_piece = board.getPieceByPos(current_chesspos);
        console.log(current_piece.getDescription());
        console.log("Valid moves:");
        console.log(board.getValidMoves(current_piece));
        board.makeBoard();
        board.showBoard();
    } else if (line_fmt === "kp") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("kp")) {
        let arg1_fmt: string = line_fmt.split(" ")[1];
        let current_chesspos = board.translateChessposToArray(arg1_fmt);
        let current_piece = board.getPieceByPos(current_chesspos);
        board.kill(current_piece);
        board.makeBoard();
        board.showBoard();
    } else if (line_fmt === "cp") {
        console.log("Parameter missing.");
    } else if (line_fmt.startsWith("cp")) {
        let arg1_fmt: string = line_fmt.split(" ")[1];
        let arg2_fmt: string = line_fmt.split(" ")[2];
        let arg3_fmt: string = line_fmt.split(" ")[3];
        let pieceToBePushed: Piece;
        pieceToBePushed = board.pieceFactory(arg2_fmt, arg1_fmt, arg3_fmt);
        if (pieceToBePushed) {
            pieces.push(pieceToBePushed);
        }
        board.makeBoard();
        board.showBoard();
    } else if (line_fmt == "hi") {
        console.log('Chessjs greets you!');
    } else if (line_fmt == "showboard") {
        board.showBoard();
    } else if (line_fmt == "makeboard") {
        board.makeBoard();
        board.showBoard();
    } else if (line_fmt == "resetboard") {
        board.resetBoard();
        board.makeBoard();
        board.showBoard();
    } else if (line_fmt == "piecespos") {
        console.log(board.getAllPiecesPos());
    } else if (line_fmt == "qtdpieces") {
        console.log(board.getPieces().length);
    } else {
        console.log(`I didn't recognize this command '${line.trim()}'`);
    }

    rl.prompt();
}).on('close', () => {
    console.log('Come back soon to play Chessjs with us again!');
    process.exit(0);
});