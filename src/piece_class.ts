export abstract class Piece {
    type: string;
    team: string;
    initial_position: number[];
    position: number[];
    killed_position: number[];
    dead: boolean = false;

    constructor(type: string, team: string, position: number[]) {
        this.type = type;
        this.team = team;
        this.initial_position = position;
        this.position = position;
    }

    abstract getValidMoves(pieces: Piece[], design): number[][];

    getPosition(): number[] {
        return this.position;
    }

    getInitialPosition(): number[] {
        return this.initial_position;
    }

    getType(): string {
        return this.type;
    }

    setType(type: string): void {
        this.type = type;
    }

    getTeam(): string {
        return this.team;
    }

    setPosition(position: number[]): void {
        this.position = position;
    }

    getDescription(): string {
        return this.getTeam()+ " " + this.getType() + " in position " + this.getPosition();
    }

    kill(): void {
        this.dead = true;
        this.killed_position = this.position;
        this.position = [];
    }

    revive(): void {
        this.dead = false;
        this.killed_position = [];
        this.position = this.initial_position;
    }
}