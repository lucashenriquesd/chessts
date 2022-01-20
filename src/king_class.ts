import { Piece } from "./piece_class";

export class King extends Piece {
    constructor(type: string, team: string, position: number[]) {
        super(type, team, position);
    }

    getValidMoves(pieces: Piece[], design): number[][] {
        let all_possible_pos_with_collision: number[][] = [];
        let hasCollidedYPlus: boolean = false;
        let hasCollidedYMinus: boolean = false;
        let hasCollidedXMinus: boolean = false;
        let hasCollidedXPlus: boolean = false;
        // Runs through all pieces positions to check for collisions
        for (let pieces_pos of pieces) {
            // Check if a piece will collide with selected piece
            if ([this.getPosition()[0] - 1, this.getPosition()[1]].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1]]);
                }
                hasCollidedYPlus = true;
            }

            if ([this.getPosition()[0] + 1, this.getPosition()[1]].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1]]);
                }
                hasCollidedYMinus = true;
            }

            if ([this.getPosition()[0], this.getPosition()[1] - 1].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0], this.getPosition()[1] - 1]);
                }
                hasCollidedXMinus = true;
            }

            if ([this.getPosition()[0], this.getPosition()[1] + 1].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0], this.getPosition()[1] + 1]);
                }
                hasCollidedXPlus = true;
            }
        }

        if (!hasCollidedYPlus) {
            all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1]]);
        }

        if (!hasCollidedYMinus) {
            all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1]]);
        }

        if (!hasCollidedXMinus) {
            all_possible_pos_with_collision.push([this.getPosition()[0], this.getPosition()[1] - 1]);
        }

        if (!hasCollidedXPlus) {
            all_possible_pos_with_collision.push([this.getPosition()[0], this.getPosition()[1] + 1]);
        }
        return all_possible_pos_with_collision;
    }
}