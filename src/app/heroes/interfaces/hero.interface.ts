export interface Hero {
    id:   string;
    name: string;
    publisher: Publisher;
    alter_ego: string;
    characters: string;
    alt_img: string;
}
export enum Publisher {
    DCComics = "DC Comics",
    Marcel = "Marvel",
}
