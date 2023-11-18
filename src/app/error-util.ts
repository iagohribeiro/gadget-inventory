import { throwError } from 'rxjs';
import { HttpErrorResponse } from "@angular/common/http";

export class ErrorUtil {
    public static handleError(error: HttpErrorResponse){
        let errorMessage = '';

        if(error instanceof Error || error instanceof ErrorEvent)
        {
            console.error('Client Side Error');
            errorMessage = 'Something unexpected happened on the Client side';
        }
        else{
            console.error('Server Side Error')
            errorMessage = ErrorUtil.getServerError(error);
        }
        return throwError (new Error(errorMessage));

        
    }

    private static getServerError(error: HttpErrorResponse){
        switch(error.status)
        {
            case 404:{
                return `The expected resources could not be found!`;
            }
            case 403:{
                return `Access denied!`;
            }
            case 500:{
                return `Unexpected Error!`;
            }
            default:{
                return `Unexpected Error. Please try again!`;
            }
        }
    }

}
