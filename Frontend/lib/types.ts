export type ProductSize = {
  size: string;
  price: number;
  stock: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
  sizes: ProductSize[];
  features: string[];
  relatedProducts: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type OrderItem = {
  productId: string;
  productName: string;
  size: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  shippingAddress: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ReviewStatus = 'pending' | 'approved' | 'rejected';

export type Review = {
  id: string;
  productId: string;
  productName: string;
  customerId: string;
  customerName: string;
  rating: number;
  comment: string;
  status: ReviewStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type QueryStatus = 'pending' | 'answered';

export type CustomerQuery = {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  subject: string;
  message: string;
  response?: string;
  status: QueryStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type DashboardStats = {
  totalProducts: number;
  totalOrders: number;
  pendingOrders: number;
  totalRevenue: number;
  lowStockProducts: number;
  pendingReviews: number;
  pendingQueries: number;
};