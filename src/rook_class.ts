import { Piece } from "./piece_class";

export class Rook extends Piece {
    constructor(type: string, team: string, position: number[]) {
        super(type, team, position);
    }

    getValidMoves(pieces: Piece[], design): number[][] {
        let all_possible_pos_with_collision: number[][] = [];
        // Vertical
        // Redo everything with a loop for all 4 directions, current code only works for a few pieces that are on the board limit

        // Runs through all the vertical positions in the array to check for possible vertical movements
        loop_posicoesyplus:
        for (let i = this.getPosition()[0]; i < design.length; i++) {
            // Checks if the current run through board index is not the same as the selected piece to allow its selection
            // A piece cannot move to itselfs positions
            if (this.getPosition()[0] !== i) {
                // Runs through all pieces positions to check for collisions
                for (let pieces_pos of pieces) {
                    // Check if a piece will collide with selected piece
                    if ([i, this.getPosition()[1]].toString() == pieces_pos.getPosition().toString()) {
                        if (pieces_pos.getTeam() !== this.getTeam()) {
                            all_possible_pos_with_collision.push([i, this.getPosition()[1]]);
                            // console.log("y+");
                            // console.log(this.getDescription() + " collided with " + this.getPieceByPos(pieces_pos).getDescription());
                        }
                        // If collided, doesnt even look for next position since pieces cannot jump.
                        // Leave the matrix immediatly
                        break loop_posicoesyplus;
                    }
                }
                // If there is no collision, add as valid move
                all_possible_pos_with_collision.push([i, this.getPosition()[1]]);
            }
        }

        loop_posicoesyminus:
        for (let i = this.getPosition()[0]; i >= 0; i--) {
            // Checks if the current run through board index is not the same as the selected piece to allow its selection
            // A piece cannot move to itselfs positions
            if (this.getPosition()[0] !== i) {
                // Runs through all pieces positions to check for collisions
                for (let pieces_pos of pieces) {
                    // Check if a piece will collide with selected piece
                    if ([i, this.getPosition()[1]].toString() == pieces_pos.getPosition().toString()) {
                        if (pieces_pos.getTeam() !== this.getTeam()) {
                            all_possible_pos_with_collision.push([i, this.getPosition()[1]]);
                            // console.log("y-");
                            // console.log(this.getDescription() + " collided with " + this.getPieceByPos(pieces_pos).getDescription());
                        }
                        // If collided, doesnt even look for next position since pieces cannot jump.
                        // Leave the matrix immediatly
                        break loop_posicoesyminus;
                    }
                }
                // If there is no collision, add as valid move
                all_possible_pos_with_collision.push([i, this.getPosition()[1]]);
            }
        }

        loop_posicoesxplus:
        for (let i = this.getPosition()[1]; i < design[this.getPosition()[0]].length; i++) {
            // Checks if the current run through board index is not the same as the selected piece to allow its selection
            // A piece cannot move to itselfs positions
            if (this.getPosition()[1] !== i) {
                // Runs through all pieces positions to check for collisions
                for (let pieces_pos of pieces) {
                    // Check if a piece will collide with selected piece
                    if ([this.getPosition()[0], i].toString() == pieces_pos.getPosition().toString()) {
                        if (pieces_pos.getTeam() !== this.getTeam()) {
                            all_possible_pos_with_collision.push([this.getPosition()[0], i]);
                            // console.log("x+");
                            // console.log(this.getDescription() + " collided with " + this.getPieceByPos(pieces_pos).getDescription());
                        }
                        // If collided, doesnt even look for next position since pieces cannot jump.
                        // Leave the matrix immediatly
                        break loop_posicoesxplus;
                    }
                }
                // If there is no collision, add as valid move
                all_possible_pos_with_collision.push([this.getPosition()[0], i]);
            }
        }

        loop_posicoesxminus:
        for (let i = this.getPosition()[1]; i >= 0; i--) {
            // Checks if the current run through board index is not the same as the selected piece to allow its selection
            // A piece cannot move to itselfs positions
            if (this.getPosition()[1] !== i) {
                // Runs through all pieces positions to check for collisions
                for (let pieces_pos of pieces) {
                    // Check if a piece will collide with selected piece
                    if ([this.getPosition()[0], i].toString() == pieces_pos.getPosition().toString()) {
                        if (pieces_pos.getTeam() !== this.getTeam()) {
                            all_possible_pos_with_collision.push([this.getPosition()[0], i]);
                            // console.log("x-");
                            // console.log(this.getDescription() + " collided with " + this.getPieceByPos(pieces_pos).getDescription());
                        }
                        // If collided, doesnt even look for next position since pieces cannot jump.
                        // Leave the matrix immediatly
                        break loop_posicoesxminus;
                    }
                }
                // If there is no collision, add as valid move
                all_possible_pos_with_collision.push([this.getPosition()[0], i]);
            }
        }
        return all_possible_pos_with_collision;
    }
}