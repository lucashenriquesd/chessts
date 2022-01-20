import { Piece } from "./piece_class";

export class Queen extends Piece {
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

        // Runs through all the vertical positions in the array to check for possible vertical movements
        // Starts at the piece current position and goes to end of the array
        let myposy: number = this.getPosition()[0];
        let myposx: number = this.getPosition()[1];
        let possibleY: number;
        let possibleX: number;

        let hasCollidedYMinusRight: number[] = [];
        let hasCollidedYMinusLeft: number[] = [];
        let hasCollidedYPlusRight: number[] = [];
        let hasCollidedYPlusLeft: number[] = [];

        // Y-right
        possibleY = myposy;
        possibleX = myposx;

        loop_posicoesyminusright:
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY++;
            possibleX++;

            for (let pieces_pos of pieces) {
                // Check if a piece will collide with selected piece
                if ([possibleY, possibleX].toString() == pieces_pos.getPosition().toString()) {
                    if (pieces_pos.getTeam() !== this.getTeam()) {
                        all_possible_pos_with_collision.push([possibleY, possibleX]);
                    }
                    hasCollidedYMinusRight = [possibleY, possibleX];
                    break loop_posicoesyminusright;
                }
            }
        }

        // Y-left
        possibleY = myposy;
        possibleX = myposx;

        loop_posicoesyminusleft:
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY++;
            possibleX--;

            for (let pieces_pos of pieces) {
                // Check if a piece will collide with selected piece
                if ([possibleY, possibleX].toString() == pieces_pos.getPosition().toString()) {
                    if (pieces_pos.getTeam() !== this.getTeam()) {
                        all_possible_pos_with_collision.push([possibleY, possibleX]);
                    }
                    hasCollidedYMinusLeft = [possibleY, possibleX];
                    break loop_posicoesyminusleft;
                }
            }
        }

        // Y+right
        possibleY = myposy;
        possibleX = myposx;

        loop_posicoesyplusright:
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY--;
            possibleX++;

            for (let pieces_pos of pieces) {
                // Check if a piece will collide with selected piece
                if ([possibleY, possibleX].toString() == pieces_pos.getPosition().toString()) {
                    if (pieces_pos.getTeam() !== this.getTeam()) {
                        all_possible_pos_with_collision.push([possibleY, possibleX]);
                    }
                    hasCollidedYPlusRight = [possibleY, possibleX];
                    break loop_posicoesyplusright;
                }
            }
        }

        // Y+left
        possibleY = myposy;
        possibleX = myposx;

        loop_posicoesyplusleft:
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY--;
            possibleX--;
            
            for (let pieces_pos of pieces) {
                // Check if a piece will collide with selected piece
                if ([possibleY, possibleX].toString() == pieces_pos.getPosition().toString()) {
                    if (pieces_pos.getTeam() !== this.getTeam()) {
                        all_possible_pos_with_collision.push([possibleY, possibleX]);
                    }
                    hasCollidedYPlusLeft = [possibleY, possibleX];
                    break loop_posicoesyplusleft;
                }
            }
        }

        // Default for empty spaces
        // Y-right
        possibleY = myposy;
        possibleX = myposx;
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY++;
            possibleX++;
            if ((possibleY >= 0 && possibleX >= 0) && (possibleY <= 7 && possibleX <= 7)) {
                if (hasCollidedYMinusRight.toString() !== [possibleY, possibleX].toString()) {
                    all_possible_pos_with_collision.push([possibleY, possibleX]);
                } else {
                    break;
                }
            }
        }

        // Y-left
        possibleY = myposy;
        possibleX = myposx;
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY++;
            possibleX--;
            if ((possibleY >= 0 && possibleX >= 0) && (possibleY <= 7 && possibleX <= 7)) {
                if (hasCollidedYMinusLeft.toString() !== [possibleY, possibleX].toString()) {
                    all_possible_pos_with_collision.push([possibleY, possibleX]);
                } else {
                    break;
                }
            }
        }

        // Y+right
        possibleY = myposy;
        possibleX = myposx;
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY--;
            possibleX++;
            if ((possibleY >= 0 && possibleX >= 0) && (possibleY <= 7 && possibleX <= 7)) {
                if (hasCollidedYPlusRight.toString() !== [possibleY, possibleX].toString()) {
                    all_possible_pos_with_collision.push([possibleY, possibleX]);
                } else {
                    break;
                }
            }
        }

        // Y+left
        possibleY = myposy;
        possibleX = myposx;
        // 8 is the maximum possible straight movements
        for (let i = 0; i < 8; i++) {
            possibleY--;
            possibleX--;
            if ((possibleY >= 0 && possibleX >= 0) && (possibleY <= 7 && possibleX <= 7)) {
                if (hasCollidedYPlusLeft.toString() !== [possibleY, possibleX].toString()) {
                    all_possible_pos_with_collision.push([possibleY, possibleX]);
                } else {
                    break;
                }
            }
        }
        return all_possible_pos_with_collision;
    }
}