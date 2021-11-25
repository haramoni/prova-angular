import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Compra } from "../models/compra";

@Injectable({
    providedIn: "root",
})
export class CompraService {
    private baseUrl = "http://localhost:5001/meiopgto";

    constructor(private http: HttpClient) {}

    list(): Observable<Compra[]> {
        return this.http.get<Compra[]>(`${this.baseUrl}/list`);
    }
}
