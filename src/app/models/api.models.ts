export class ApiResponse<T> {
    status:string;
	message:string;
	timestamp:Date;
	result:T;
}