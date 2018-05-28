import { AppErrorHandler } from './app-error-handler';

export class AppError{
    constructor(public orginalError?: any){}
}