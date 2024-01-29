export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  ratings: Rating[];
  genres: Genres[];
  short_screenshots: PreviewScreenShot[];
  tags: Tag[];
}

type PreviewScreenShot = {
  id: number;
  image: string;
};

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

interface Genres {
  id: number;
  name: string;
  slug: string;
  game_count: number;
  image_background: string;
}

interface Tag extends Genres {
  language: string;
}

export interface GameResponse {
  count: number;
  results: Game[];
}
