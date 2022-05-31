import { Gender } from "src/gender/entities/gender.entity";

export class Game {
    id?: string;
    title: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYoutubeUrl: string;
    gameplayYoutubeUrl: string;
    gender?: Gender[];
    coverImageUrl: string;

}
