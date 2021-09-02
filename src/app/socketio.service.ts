import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import {Observable, Subscriber} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SocketioService {
 
  socket:any;
  readonly url : string="ws://localhost:3001";
  

 constructor() { 
   this.socket= io(this.url);
 }

listen(eventName: string)
{
  return new Observable((subscriber)=>
  {
    this.socket.on(eventName,(data)=>
    {
      subscriber.next(data);
    })
  });
}

emit(eventName:string, data:any)
{
  this.socket.emit(eventName,data);
}

}
   

