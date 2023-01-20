export interface Product {
  productId: number;
  productName?: string;
  productPrice?: number;
  productAmount?:number;
  productImage: string;
  prId?: any;
  ptypeId?: any;
  pr?: any;
  ptype?: Ptype;
  cart: any[];
}

export interface Rm {
  rmId: number;
  rmName?: string;
  rmPrice?: number;
  rmImage: string;
  rmStock?: number;
  upfile:any;
  pizzaRm: any[];
}

export interface Cart {
  productId:any;
  productPrice:number;
  productImage:string;
  productAmount:number;
  userId:number;
  //prId:number;
  //cartPtotal:number;
  cartAmount:number;
}

export interface PizzaRm {
  prId: number;
  rmId?: number;
  prAmount?: any;
  prName: string;
  prPtotal?:number;
  rm?: Rm;
  cart: any[];

}
// export interface ProductResponse {
//     ProductId: number;
//     ProductName: string;
//     ProductImage: string;
//     ProductPrice: number;
//     PrId:number;
//     PtypeId:number
    
// }

export interface Ptype {
  ptypeId: number;
  ptypeName: string;
}

export interface Titles {
  titleId : number;
  titleName : string;
}

export interface User {
  userId: number;
  titleId?: any;
  userName: string;
  userLastname: string;
  userEmail: string;
  userPassword: string;
  userAddress:string;
  title?: Titles;
  purchse: any[];
}

export interface imgproduct{
  imgId?: any
  productId?: any
  imgDetail?: any
  imgPic?: any
  product?: any[];
  upfile?:any;
}


