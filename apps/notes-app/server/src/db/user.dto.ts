export interface UserDto {
	[index: string]: string;
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	mobile: string;
}

export type CreateUserDto = {
	[index: string]: string;
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	mobile: string;
	password: string;
};