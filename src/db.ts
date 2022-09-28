import Dexie, { Table } from 'dexie';

export interface Posts {
    id?: number;
    tweetMessage: string;
    tweetImage: string;
    nickname: string|undefined;
    picture:string|undefined;
    email_verified: boolean|undefined;
  }

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  posts!: Table<Posts>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      posts: '++id, tweetMessage, tweetImage, nickname, picture, email_verified' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();