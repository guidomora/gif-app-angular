import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) // al estar en root, este servicio se puede usar en toda la app
export class GifService {
    private _tagsHistory:string[] = []
    private apiKey:string = 'SVxmN6ETOThm9Uayf0sPlG04l6CJD5w4'
    private serviceUrl: string ='https://api.giphy.com/v1/gifs'

    constructor(
        private http:HttpClient
    ) { }
    

    private organizeHistory(tag:string){
        tag.toLowerCase()

        if (this._tagsHistory.includes(tag)){
            // si ya hay un tag igual, no lo deja pasar
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag)
        this._tagsHistory = this.tagsHistory.splice(0, 10)
    }

    get tagsHistory(){
        return [...this._tagsHistory]
    }

    searchTag(tag:string):void {
        if (tag.length == 0) return
        this,this.organizeHistory(tag)
        
        // los parametros
        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag)

        // seria como si fuese el fetch
        this.http.get(`${this.serviceUrl}/search`,{params} )
        .subscribe(resp => { 
            // subscribe es un observable, un objeto que emite diferentes valores
            console.log(resp);
        })
    }
}