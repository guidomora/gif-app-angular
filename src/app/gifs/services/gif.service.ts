import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interface';

@Injectable({providedIn: 'root'}) // al estar en root, este servicio se puede usar en toda la app
export class GifService {
    public gifList: Gif[] = []
    private _tagsHistory:string[] = []
    private apiKey:string = 'SVxmN6ETOThm9Uayf0sPlG04l6CJD5w4'
    private serviceUrl: string ='https://api.giphy.com/v1/gifs'

    constructor(
        private http:HttpClient
    ) { 
        this.loadLocalStorage()
    }
    

    private organizeHistory(tag:string){
        tag.toLowerCase()

        if (this._tagsHistory.includes(tag)){
            // si ya hay un tag igual, no lo deja pasar
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag)
        this._tagsHistory = this.tagsHistory.splice(0, 10)
        this.saveLocalStorage()
    }

    get tagsHistory(){
        return [...this._tagsHistory]
    }

    private saveLocalStorage():void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    }

    private loadLocalStorage():void {
        if (!localStorage.getItem('history')) return
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

        if (this._tagsHistory.length === 0) return
        this.searchTag(this._tagsHistory[0])
    }

    searchTag(tag:string):void {
        if (tag.length == 0) return
        this,this.organizeHistory(tag)
        
        // los parametros
        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', tag)

        // seria como si fuese el fetch y le agregamos el tipados
        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params} )
        .subscribe(resp => { 
            // subscribe es un observable, un objeto que emite diferentes valores
            this.gifList = resp.data            
        })
    }
}