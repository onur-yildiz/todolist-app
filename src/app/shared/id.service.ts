import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IdService {
  idList: string[] = []; //USE HTTP TO SAVE IDs

  generateId() {
    const newId = Math.random().toString(36).substr(2, 16);
    for (const id of this.idList) {
      if ( newId === id) {
        return this.generateId();
      }
    }
    this.idList.push(newId);
    return newId;
  }
}