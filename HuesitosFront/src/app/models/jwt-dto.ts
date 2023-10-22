export class JwtDto {
    token: string;
    type: string;
    authorities: string[];
    username: string;
}
