export interface ApiResponse<T> {
    status:String;
	message:String;
	timestamp:Date;
	result:T;
}