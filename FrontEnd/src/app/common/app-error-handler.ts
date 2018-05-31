import { AppError } from './app-error';
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert("An unexpected error occured....");
        console.log(error);
    }
}