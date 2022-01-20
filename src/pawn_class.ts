import { Piece } from "./piece_class";

export class Pawn extends Piece {
    constructor(type: string, team: string, position: number[]) {
        super(type, team, position);
    }

    getValidMoves(pieces: Piece[], design): number[][] {
        let all_possible_pos_with_collision: number[][] = [];
        if (this.getTeam() == "White") {
            let hasCollided: boolean = false;
            // Runs through all pieces positions to check for collisions
            for (let pieces_pos of pieces) {
                // Check if a piece will collide with selected piece
                if ([this.getPosition()[0] - 1, this.getPosition()[1]].toString() == pieces_pos.getPosition().toString()) {
                    hasCollided = true;
                }

                if ([this.getPosition()[0] - 1, this.getPosition()[1] + 1].toString() == pieces_pos.getPosition().toString()) {
                    if (this.getTeam() !== pieces_pos.getTeam()) {
                        all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1] + 1]);
                    }
                } else if ([this.getPosition()[0] - 1, this.getPosition()[1] - 1].toString() == pieces_pos.getPosition().toString()) {
                    if (this.getTeam() !== pieces_pos.getTeam()) {
                        all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1] - 1]);
                    }
                }
            }

            if (hasCollided === false) {
                if (this.getPosition()[0] - 1 >= 0) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1]]);
                }
            }

            // 6 is the initial position for all White Pawns
            if (this.getPosition()[0] == 6) {
                all_possible_pos_with_collision.push([this.getPosition()[0] - 2, this.getPosition()[1]]);
            }
        } else if (this.getTeam() == "Black") {
            let hasCollided: boolean = false;
            // Runs through all pieces positions to check for collisions
            for (let pieces_pos of pieces) {
                // Check if a piece will collide with selected piece
                if ([this.getPosition()[0] + 1, this.getPosition()[1]].toString() == pieces_pos.getPosition().toString()) {
                    hasCollided = true;
                }

                if ([this.getPosition()[0] + 1, this.getPosition()[1] + 1].toString() == pieces_pos.getPosition().toString()) {
                    if (this.getTeam() !== pieces_pos.getTeam()) {
                        all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1] + 1]);
                    }
                } else if ([this.getPosition()[0] + 1, this.getPosition()[1] - 1].toString() == pieces_pos.getPosition().toString()) {
                    if (this.getTeam() !== pieces_pos.getTeam()) {
                        all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1] - 1]);
                    }
                }
            }
            // Verify if Pawn has already collided with another piece, if not, apply generic rule
            if (hasCollided === false) {
                // Doesn't let Pawn to move out of the board
                if (this.getPosition()[0] + 1 <= 7) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1]]);
                }
            }

            // 1 is the initial position for all Black Pawns
            if (this.getPosition()[0] == 1) {
                all_possible_pos_with_collision.push([this.getPosition()[0] + 2, this.getPosition()[1]]);
            }
        }
        return all_possible_pos_with_collision;
    }
}