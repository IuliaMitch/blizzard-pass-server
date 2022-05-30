import { Game } from 'src/games/entities/game.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { User } from 'src/user/entities/user.entity';

export class Profile {
  id?: string;
  title: string;
  imageUrl: string;
  user?: User;
  genders?: Gender;
  games?: Game[];
  createdAt?: Date;
  updatedAt?: Date;
}