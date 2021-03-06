import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import{catchError} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

 readonly url="http://localhost:2345/";
  constructor(private http:HttpClient) { }

  addfac(data:any){
    return this.http.post(this.url+"user/new",data);
  }
  getfac(){
    return this.http.get(this.url+'user/');
  }
  adddean(data:any){
    return this.http.post(this.url+"dean/new",data);
  }
  getd(){
    return this.http.get(this.url+"dean/");
  }
  faclogin(data:any):Observable<any>{
    return this.http.post(this.url+"login",data);
  }
  deanlogin(data:any):Observable<any>{
    return this.http.post(this.url+"dean/login",data);
  }
  handleerr(error:any){
    return throwError(error.message || "Server Error");
  }
  getfacbid(data:any):Observable<any>{
    return this.http.get(this.url+"user/"+data);
  }
  editfaculty(data:any,id:any){
    return this.http.put(this.url+"user/"+id+"/edit",data);
  }
  uploadimg(data:any){
    return this.http.post(this.url+"user/image",data);
  }
  uploadfile(data:any){
    return this.http.post(this.url+"files",data);
  }
  addexp(data:any){
   return this.http.post(this.url+"experience/new",data);
  }
  getexp(id:any){
    return this.http.get(this.url+"experience/"+id);
  }
  logoutfn(){
    return this.http.get(this.url+"logout");
  }
  logoutd(){
    return this.http.get(this.url+"dean/logout");
  }
  addADevent(data:any){
    return this.http.post(this.url+"event/addEvent",data);
  }
  addOevent(data:any){
    return this.http.post(this.url+"event/organized",data);
  }
  getADevents(id:any):Observable<any>{
    return this.http.get(this.url+"event/getEvent/"+id);
  }
  getOevents(id:any):Observable<any>{
    return this.http.get(this.url+"event/getOrganizedEvent/"+id);
  }
  addjournal(data:any){
    return this.http.post(this.url+"publication/journal",data);
  }
  addconference(data:any){
    return this.http.post(this.url+"publication/conference",data);
  }
  addpatent(data:any){
    return this.http.post(this.url+"publication/patent",data);
  }
  getjour(id:any):Observable<any>{
    return this.http.get(this.url+"publication/journal/"+id);
  }
  getconf(id:any):Observable<any>{
    return this.http.get(this.url+"publication/conference/"+id);
  }
  getpat(id:any):Observable<any>{
    return this.http.get(this.url+"publication/patent/"+id);
  }
  getfacbs(school:any):Observable<any>{
    return this.http.get(this.url+"user/school/"+school);
  }
  getfile(data:any):Observable<any>{
    return this.http.get(this.url+"download/"+data,{observe:'response',responseType:'blob'});
  }
  addfundpro(data:any){
    return this.http.post(this.url+"project//funded/new",data);
  }
  getprobfid(id:any):Observable<any>{
    return this.http.get(this.url+"project/funded/"+id);
  }
  deletefac(id:any){
    return this.http.delete(this.url+"user/delete/"+id);
  }
  deletedean(id:any){
    return this.http.delete(this.url+"dean/delete/"+id);
  }
  deleteADevents(id:any){
    return this.http.delete(this.url+"event/delete/oevent/"+id);
  }
  deleteOevents(id:any){
    return this.http.delete(this.url+"event/delete/organized/"+id);
  }
  deletefp(id:any){
    return this.http.delete(this.url+"project/delete/funded/"+id);
  }
  deleteconf(id:any){
    return this.http.delete(this.url+"publication/delete/conference/"+id);
  }
  deletejou(id:any){
    return this.http.delete(this.url+"publication/delete/journal/"+id); 
  }
  deletepat(id:any){
    return this.http.delete(this.url+"publication/delete/patent/"+id); 
  }
}
