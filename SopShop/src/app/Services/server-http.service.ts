import { Injectable } from '@angular/core';
import { 
  HttpClient, 
  HttpErrorResponse,
  HttpHeaders 
  } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IListPeople } from '../1.CommonModel/list-people';
import { Iuser } from '../1.CommonModel/User';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    
  };
   

  constructor(private http: HttpClient) { }

  //user
 
 
  //add user
addUser(user: Iuser[]) : Observable<Iuser[]> {
  return this.http.post<Iuser[]>('https://localhost:44368/api/Users/InsertUser',user)
}


//People
//show data
 
getList(): Observable<IListPeople[]> {
    return this.http.get<IListPeople[]>('https://localhost:44368/api/People/GetAllPeople'); // đây à ừa đây là file service http
  }
//add Data
    insertData(data:IListPeople[] ): Observable<IListPeople[]> {
    return this.http.post<IListPeople[]>('https://localhost:44368/api/People/InsertData', data);
  }
//eidt data
getbyId(id: string): Observable<IListPeople[]> {
  return this.http.get<IListPeople[]>('https://localhost:44368/api/People/GetPeople?id=' +id);
}
//delete data   
  deleteList(id: number): Observable<IListPeople[]> {
  return this.http.delete<IListPeople[]>('https://localhost:44368/api/People/DeleteData?id='+id);
}


  //Error
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      console.error('An error occurred:', error.error);
    } else {
      
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}




