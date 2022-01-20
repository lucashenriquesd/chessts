import { Piece } from "./piece_class";

export class Knight extends Piece {
    constructor(type: string, team: string, position: number[]) {
        super(type, team, position);
    }

    getValidMoves(pieces: Piece[], design): number[][] {
        let all_possible_pos_with_collision: number[][] = [];
        let hasCollidedYPlusRight: boolean = false;
        let hasCollidedYPlusLeft: boolean = false;
        let hasCollidedYMinusRight: boolean = false;
        let hasCollidedYMinusLeft: boolean = false;
        let hasCollidedXPlusUp: boolean = false;
        let hasCollidedXPlusDown: boolean = false;
        let hasCollidedXMinusUp: boolean = false;
        let hasCollidedXMinusDown: boolean = false;
        // Runs through all pieces positions to check for collisions
        for (let pieces_pos of pieces) {
            // Check if a piece will collide with selected piece
            // Y+right
            if ([this.getPosition()[0] - 2, this.getPosition()[1] + 1].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] - 2, this.getPosition()[1] + 1]);
                }
                hasCollidedYPlusRight = true;
            }
            // Y+left
            if ([this.getPosition()[0] - 2, this.getPosition()[1] - 1].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] - 2, this.getPosition()[1] - 1]);
                }
                hasCollidedYPlusLeft = true;
            }
            // Y-right
            if ([this.getPosition()[0] + 2, this.getPosition()[1] + 1].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] + 2, this.getPosition()[1] + 1]);
                }
                hasCollidedYMinusRight = true;
            }
            // Y-left
            if ([this.getPosition()[0] + 2, this.getPosition()[1] - 1].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] + 2, this.getPosition()[1] - 1]);
                }
                hasCollidedYMinusLeft = true;
            }
            // X+up
            if ([this.getPosition()[0] - 1, this.getPosition()[1] + 2].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1] + 2]);
                }
               hasCollidedXPlusUp = true;
            }
            // X+down
            if ([ this.getPosition()[0] + 1, this.getPosition()[1] + 2].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1] + 2]);
                }
                hasCollidedXPlusDown = true;
            }
            // X-up
            if ([this.getPosition()[0] - 1, this.getPosition()[1] - 2].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1] - 2]);
                }
                hasCollidedXMinusUp = true;
            }
            // X-down
            if ([this.getPosition()[0] + 1, this.getPosition()[1] - 2].toString() == pieces_pos.getPosition().toString()) {
                if (this.getTeam() !== pieces_pos.getTeam()) {
                    all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1] - 2]);
                }
                hasCollidedXMinusDown = true;
            }
        }

        // Set movement for empty positions, an alternative to complex loops
        // Y+right
        if (hasCollidedYPlusRight === false && this.getPosition()[0] - 2 >= 0 && this.getPosition()[1] + 1 <= 7) {
            all_possible_pos_with_collision.push([this.getPosition()[0] - 2, this.getPosition()[1] + 1]);
        }
        // Y+left
        if (hasCollidedYPlusLeft === false && this.getPosition()[0] - 2 >= 0 && this.getPosition()[1] - 1 >= 0) {
            all_possible_pos_with_collision.push([this.getPosition()[0] - 2, this.getPosition()[1] - 1]);
        }
        // Y-right
        if (hasCollidedYMinusRight === false && this.getPosition()[0] + 2 <= 7 && this.getPosition()[1] + 1 <= 7) {
            all_possible_pos_with_collision.push([this.getPosition()[0] + 2, this.getPosition()[1] + 1]);
        }
        // Y-left
        if (hasCollidedYMinusLeft === false && this.getPosition()[0] + 2 <= 7 && this.getPosition()[1] - 1 >= 0) {
            all_possible_pos_with_collision.push([this.getPosition()[0] + 2, this.getPosition()[1] - 1]);
        }
        // X+up
        if (hasCollidedXPlusUp === false && this.getPosition()[1] + 2 <= 7 && this.getPosition()[0] - 1 >= 0) {
            all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1] + 2]);
        }
        // X+down
        if (hasCollidedXPlusDown === false && this.getPosition()[1] + 2 <= 7 && this.getPosition()[0] + 1 <= 7) {
            all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1] + 2]);
        }
        // X-up
        if (hasCollidedXMinusUp === false && this.getPosition()[1] - 2 >= 0 && this.getPosition()[0] - 1 >= 0) {
            all_possible_pos_with_collision.push([this.getPosition()[0] - 1, this.getPosition()[1] - 2]);
        }
        // X-down
        if (hasCollidedXMinusDown === false && this.getPosition()[1] - 2 >= 0 && this.getPosition()[0] + 1 <= 7) {
            all_possible_pos_with_collision.push([this.getPosition()[0] + 1, this.getPosition()[1] - 2]);
        }
        return all_possible_pos_with_collision;
    }
}