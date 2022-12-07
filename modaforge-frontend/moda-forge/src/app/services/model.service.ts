import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { ModelDetail } from 'src/modules/interfaces/model-detail.interface';
import { Model } from 'src/modules/interfaces/model.interface';

@Injectable({
  providedIn: 'root'
})

export class ModelService {

  constructor(private http: HttpClient) { }

  // variables
  getAll: string = 'https://api.sketchfab.com/v3/models?archives_flavours=false'
  modelById: string = 'https://api.sketchfab.com/v3/models/'

  // get all models from api
  getAllModels() {
    return this.http.get<Model>(this.getAll);
  }

  // get model by id
  getModelById(id: string) {
    return this.http.get<ModelDetail>(this.modelById + id);
  }





}
