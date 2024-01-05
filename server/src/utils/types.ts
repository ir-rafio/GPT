import { Nickname, Vote } from '@prisma/client';

interface StudentBase {
  id: number;
  name: string;
  tshirtSize: string;
  note: string | null;
}

export interface Me extends StudentBase {
  votes: Vote[];
  amAScientist: boolean;
}

export interface Classmate extends StudentBase {
  nicknames: Nickname[];
}
