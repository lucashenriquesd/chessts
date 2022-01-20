import { Piece } from "./piece_class";

export class Bishop extends Piece {
    constructor(type: string, team: string, position: number[]) {
        super(type, team, position);
    }

    getValidMoves(pieces: Piece[], design): number[][] {
        let all_possible_pos_with_collision: number[][] = [];
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