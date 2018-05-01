export class ApiResponse<T> {
    status:string;
	message:string;
	timestamp:Date;
	result:T;
}

export class UserCredential{
	username:String;
	password:String;
}

export class UserPrincipal{
	sessionId:String;
	username:String;
	roles:String[];
}