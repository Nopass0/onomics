export interface IUser {
    id: number,
    username: string | null,
    email: string,
    password: string,
    avatar: string,
    createdAt: Date | null,
    updatedAt: Date | null,
    isStuff: boolean,
    description: string | null,
    author_code: string | null
  }