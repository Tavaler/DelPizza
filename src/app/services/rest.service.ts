import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Ptype, Product, User, Titles, Rm, imgproduct } from '../Models/product.model';
//import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  private hostUrl = environment.backendUrl;
  private authenApiUrl = `${this.hostUrl}ApiUsers`;
  private authenApiTitleUser = `${this.hostUrl}ApiTitles`;
  

  private loginUrl = `${this.authenApiUrl}/Login`;
  private registerUrl = `${this.authenApiUrl}/Register`;

  private adminApiUrl = `${this.hostUrl}ApiAdmins`;
  private adminUrl = `${this.adminApiUrl}/Login`;

  private productUrl = `${this.hostUrl}ApiProducts`;
  private authenApiTypeProduct = `${this.hostUrl}ApiPizzaTypes`;

  private ImgproductsUrl = `${this.hostUrl}ApiImgProducts`;

  private rmUrl = `${this.hostUrl}ApiRms`;

  private pizzaRmUrl = `${this.hostUrl}ApiRms`;

  public OK = 'OK'
  public OKS = 'OKS'

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn() {
    let loginResult = localStorage.getItem(environment.loginResult);
    return (loginResult != null && loginResult == this.OK)
  }

  isLoggedInAdmin() {
    let loginResult = localStorage.getItem(environment.loginResult);
    return (loginResult != null && loginResult == this.OKS)
  }

  chkLoggedIn() {
    let loginResult = localStorage.getItem(environment.loginResult);
    if (loginResult == null || loginResult !== this.OK) {
      this.router.navigate(['login'])
    }
  }

  login(value:any) {
    let formData = new FormData()
    formData.append('userEmail', value.userEmail)
    formData.append('userPassword', value.userPassword) 
    return this.http.post<any>(this.loginUrl,formData)
    //return this.http.post<any>("https://localhost:44378/ApiUsers/Login", formData);
  }

  Register(value:any) {
    let formData = new FormData()
    // formData.append('TitleId', value.TitleId)
    formData.append('userName', value.userName)
    formData.append('title', value.titleName)
    formData.append('userLastname', value.userLastname)
    formData.append('userEmail', value.userEmail)
    formData.append('userPassword', value.userPassword)
    formData.append('userAddress', value.userAddress)
    return this.http.post<any>(this.registerUrl,formData)
  }

  Adminlogin(value:any) {
    let formData = new FormData()
    formData.append('AdminEmail', value.AdminEmail)
    formData.append('AdminPassword', value.AdminPassword)
    return this.http.post<any>(this.adminUrl,formData)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.authenApiUrl)
  }
  
  deleteUser(id: any) {
    const url = `${this.authenApiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
  }

  getRms(): Observable<Rm[]> {
    return this.http.get<Rm[]>(this.rmUrl)
  }

  getTypeProduct(): Observable<Ptype[]> {
    return this.http.get<Ptype[]>(this.authenApiTypeProduct)
  }

  // getTitleUser(): Observable<Title[]> {
  //   return this.http.get<Title[]>(this.authenApiTitleUser)
  // }

  getTitleUser(): Observable<Titles[]>{
    return this.http.get<Titles[]>(this.authenApiTitleUser)
  }
  
  getProductImageUrl(productImage: string): string {
    if (productImage) return `${environment.backendUrl}${productImage}`

    return 'assets/noimg.png'
  }

  getRmImageUrl(rmImage: string): string {
    if (rmImage) return `${environment.backendUrl}${rmImage}`

    return 'assets/noimg.png'
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.productUrl, this.makeFormData(product))
  }
  addRm(rm: any): Observable<any> {
    return this.http.post<any>(this.rmUrl, this.makeFormDataRm(rm))
  }
  addPr(pr: any): Observable<any> {
    return this.http.post<any>(this.pizzaRmUrl, this.makeFormDataPizza(pr))
  }

  deleteProduct(id: any) {
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  deleteRm(id: any) {
    const url = `${this.rmUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(this.productUrl, this.makeFormData(product))
  }

  updateRm(rm: Rm): Observable<any> {
    return this.http.put<any>(this.rmUrl, this.makeFormData(rm))
  }

  getProductById(id: number) {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getRmById(id: number) {
    const url = `${this.rmUrl}/${id}`;
    return this.http.get<any>(url);
  }

  getProductByKeyword(keyword: String) {
    const url = `${this.productUrl}/SearchProducts/${keyword}`;
    return this.http.get<any[]>(url);
  }

  getRmByKeyword(keyword: String) {
    const url = `${this.rmUrl}/SearchRms/${keyword}`;
    return this.http.get<any[]>(url);
  }


  makeFormData(product: any): FormData {
    const formData = new FormData()
    formData.append("productId", `${product.productId}`);
    formData.append("productName", product.productName);
    formData.append('productPrice', `${product.productPrice}`);
    formData.append('productAmount', `${product.productAmount}`);
    formData.append('ptype', `${product.ptype}`)
    // formData.append('ptypeId', `${product.ptypeId}`)
    if (product.productImage == null) product.productImage = ""
    formData.append('productImage', product.productImage)
    formData.append('upfile', product.upfile)
    return formData
  }

  makeFormDataRm(rm: any): FormData {
    const formData = new FormData()
    // formData.append("rmId", `${rm.rmId}`);
    formData.append("rmName", rm.rmName);
    formData.append('rmPrice', `${rm.rmPrice}`)
    // formData.append('rmStock', `${rm.rmStock}`)
    if (rm.rmImage == null) rm.rmImage = ""
    formData.append('rmImage', rm.rmImage)
    formData.append('upfile', rm.upfile)
    return formData
  }

  // makeFormDataPizza(pizza: any): FormData {
  //   const formData = new FormData()
  //   formData.append("prId", `${pizza.prId}`);
  //   formData.append("prName", `${pizza.prName}`);
  //   formData.append('prAmount', `${pizza.prAmount}`);
  //   if (rm.rmImage == null) rm.rmImage = ""
  //   formData.append('rmImage', rm.rmImage)
  //   formData.append('upfile', rm.upfile)
  //   return formData
  // }

  //------------------------

  putproduct(Form:any){
    return this.http.put<any>(`${this.productUrl}`,this.makeFormData(Form))
  }

  imgdetail(Form:any):FormData{
    const formdata = new FormData();
    formdata.append("idProduct",Form.imgId)
    formdata.append("image",Form.imgPic)
    formdata.append("moreDetaill",Form.imgDetail)
    return formdata
  }

  makeImgproductFormData(imgproducts : imgproduct) :FormData {
    const formData = new FormData()
    formData.append("idProduct",`${imgproducts.imgId}`);
    formData.append("moreDetaill",`${imgproducts.imgDetail}`);
    formData.append("image",`${imgproducts.imgPic}`)
    for(var i of imgproducts.upfile){
      formData.append("upfile",i)
    }
    return formData
  }

  getImgproductById(id:any){
    const url = `${this.ImgproductsUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addImgproducts(imagproducts: imgproduct): Observable<any>{
    return this.http.post<any>(this.ImgproductsUrl,this.makeImgproductFormData(imagproducts))
  }

  //-------------------------------------------------------------------------
  makeFormDataPizza(value:any): FormData{
    const formData = new FormData()

    formData.append('prId', value.prId)
    formData.append('prName', value.prName)
    formData.append('prAmount', value.prAmount)
    formData.append('prPtotal', value.prPtotal)
    formData.append('rm', value.rm)
    //return this.http.post<any>(this.pizzaRmUrl,formData)
    return formData
  }
  
    // makeFormDataPizza(pizza: any): FormData {
  //   const formData = new FormData()
  //   formData.append("prId", `${pizza.prId}`);
  //   formData.append("prName", `${pizza.prName}`);
  //   formData.append('prAmount', `${pizza.prAmount}`);
  //   if (rm.rmImage == null) rm.rmImage = ""
  //   formData.append('rmImage', rm.rmImage)
  //   formData.append('upfile', rm.upfile)
  //   return formData
  // }
}
