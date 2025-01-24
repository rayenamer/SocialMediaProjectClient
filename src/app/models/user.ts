export interface User {
    id: string;
    username: string;
    KnownAs: string;
    gender: string;
    token: string;
    photoUrl?: string;
    roles: string[];
}
