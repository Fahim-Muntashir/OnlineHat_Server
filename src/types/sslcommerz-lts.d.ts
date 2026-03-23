declare module "sslcommerz-lts" {
  class SSLCommerzPayment {
    constructor(store_id: string, store_passwd: string, is_live: boolean);
    init(data: Record<string, any>): Promise<{ GatewayPageURL?: string }>;
    validate(data: { val_id: string }): Promise<{ status: string }>;
  }
  export default SSLCommerzPayment;
}
