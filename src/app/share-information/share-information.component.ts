import { Component, ElementRef, OnInit, Inject } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { OrderRequest } from '../order-request';
import { OrderService } from '../order.service';
import {CountryISO,SearchCountryField} from "ngx-intl-tel-input";
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { GoogleMapsModule ,MapMarker, MapInfoWindow } from '@angular/google-maps'
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-share-information',
  templateUrl: './share-information.component.html',
  styleUrls: ['./share-information.component.css']
})
export class ShareInformationComponent implements OnInit {
  isApiLoaded = false;
  markers = []  as  any;
  longA!:any
  attA!:any;
  pickUpLocation!:string;
  info!: MapInfoWindow;
  infoContent = ''
  destination!:string;
  phone!:string;
  people!:number;
  situationType!:string;
  time:any;
  isLoaded!: string;
  matricule!: any;
  order: OrderRequest = new OrderRequest();
  order1: OrderRequest = new OrderRequest();
  date: Date= new Date();
  message=""
  center!: google.maps.LatLngLiteral;
  tel!:any
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  registerForm!:FormGroup
   submitted=false
  constructor(private router: Router ,private orderService: OrderService ,private formBuilder:FormBuilder, @Inject(DOCUMENT) private document: Document,
  private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      location:['',[Validators.required]],
      destination:['',[Validators.required]],

      people:['',[Validators.required]],
      matricule:['',[Validators.required]],
    details:['',[Validators.required]],
    loaded:['',[Validators.required]],

    type:['',[Validators.required,]],



    })

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }

      this.markers.push({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        label: {
          color: 'red',

        },
        zoom:100,
        title: 'Your position ',
        info: 'Your position ',
        options: { animation: google.maps.Animation.BOUNCE },
      });
    })



  }



  confirm()
{
 /* console.log(this.pickUpLocation)
  console.log(this.destination)
  console.log(this.people)
  console.log(this.phone)
  console.log(this.situationType)
  console.log(this.matricule);*/
  console.log(this.tel.nationalNumber);



  this.router.navigate(['/sendPicture']);
}
saveOrder(){

  this.submitted = true

    if(this.registerForm.invalid){
      return
    }
else{
this.order.positionALong=this.longA;
this.order.positionAAtt=this.attA
this.order.positionBLong="todo"
this.order.positionCLong="ToDO";
this.order.positionCAtt="todo"
const whitespaceRemoved = this.tel.nationalNumber.replace(/\s/g, '');

this.order.telephone=Number(whitespaceRemoved);
if(whitespaceRemoved.length==8)
{
  this.orderService.createOrder(this.order).subscribe( data =>{
localStorage.setItem('id',data.id)
console.log(localStorage.getItem('id'))

 console.log(data)

  },
  error => {
  console.log(error),
  this.message="il y'a une erreur "
  });
}
else
{
  console.log("le numéro est invalide ")
}}}
phoneForm = new FormGroup({
  phone: new FormControl('', [Validators.required])
});


options: any = {
  componentRestrictions: { country: 'IN' }
}



handleAddressChange(address: Address) {
  this.attA=address.geometry.location.lat()
  this.longA=address.geometry.location.lng()
  console.log(address.formatted_address)
  console.log(address.geometry.location.lat())
  console.log(address.geometry.location.lng())
  this.markers.push({
    position: {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng(),
    },
    label: {
      color: 'red',

    },
    title: 'Your destination ' ,
    info: 'Your destination ',
    options: { animation: google.maps.Animation.BOUNCE },
  });
}

openInfo(marker: MapMarker, content: string) {
  this.infoContent = content;
  this.info.open(marker)
}





}
