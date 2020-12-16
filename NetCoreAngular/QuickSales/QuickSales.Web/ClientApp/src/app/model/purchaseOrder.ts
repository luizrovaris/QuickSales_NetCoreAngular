export class PurchaseOrder {
  public id: number;
  public purchaseOrderDate: Date;
  public userId: number;
  public expectedDeliveryDate: Date;
  public postalCode: string;
  public city: string;
  public address: string;
  public addressNumber: string;
  public paymentMethodId: number;
}
