import { Product, Order, Review, CustomerQuery, DashboardStats, OrderStatus, ReviewStatus, QueryStatus } from './types';

// Sample product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Oud',
    description: 'A luxurious blend of rare oud wood, sandalwood, and musk with subtle hints of spices.',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: [
      { size: '3ml', price: 29.99, stock: 15 },
      { size: '6ml', price: 49.99, stock: 10 },
      { size: '12ml', price: 89.99, stock: 5 }
    ],
    features: [
      'Long-lasting fragrance',
      'Made with premium ingredients',
      'Alcohol-free formula',
      'Suitable for all occasions'
    ],
    relatedProducts: ['2', '5'],
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15')
  },
  {
    id: '2',
    name: 'Amber Mystique',
    description: 'A warm and sensual fragrance with amber, vanilla, and exotic spices.',
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: [
      { size: '3ml', price: 24.99, stock: 20 },
      { size: '6ml', price: 44.99, stock: 12 },
      { size: '12ml', price: 79.99, stock: 8 }
    ],
    features: [
      'Rich and complex aroma',
      'Premium quality ingredients',
      'Alcohol-free formula',
      'Perfect for evening wear'
    ],
    relatedProducts: ['1', '3'],
    createdAt: new Date('2023-02-10'),
    updatedAt: new Date('2023-02-10')
  },
  {
    id: '3',
    name: 'Saffron Rose',
    description: 'An elegant blend of saffron, rose, and agarwood creating a sophisticated fragrance.',
    images: [
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: [
      { size: '3ml', price: 27.99, stock: 18 },
      { size: '6ml', price: 47.99, stock: 9 },
      { size: '12ml', price: 84.99, stock: 4 }
    ],
    features: [
      'Unique saffron and rose blend',
      'Handcrafted in small batches',
      'Alcohol-free formula',
      'Suitable for special occasions'
    ],
    relatedProducts: ['2', '4'],
    createdAt: new Date('2023-03-05'),
    updatedAt: new Date('2023-03-05')
  },
  {
    id: '4',
    name: 'Musk Seduction',
    description: 'A captivating blend of white musk, jasmine, and amber for a seductive aura.',
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: [
      { size: '3ml', price: 22.99, stock: 25 },
      { size: '6ml', price: 39.99, stock: 15 },
      { size: '12ml', price: 69.99, stock: 10 }
    ],
    features: [
      'Sensual musk base notes',
      'Premium quality ingredients',
      'Alcohol-free formula',
      'Perfect for romantic occasions'
    ],
    relatedProducts: ['3', '5'],
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2023-04-20')
  },
  {
    id: '5',
    name: 'Sandalwood Bliss',
    description: 'A calming and grounding fragrance with sandalwood, cedarwood, and vanilla.',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop'
    ],
    sizes: [
      { size: '3ml', price: 25.99, stock: 22 },
      { size: '6ml', price: 45.99, stock: 14 },
      { size: '12ml', price: 79.99, stock: 7 }
    ],
    features: [
      'Authentic sandalwood aroma',
      'Sourced from sustainable forests',
      'Alcohol-free formula',
      'Perfect for daily wear'
    ],
    relatedProducts: ['1', '4'],
    createdAt: new Date('2023-05-15'),
    updatedAt: new Date('2023-05-15')
  }
];

// Sample order data
export const orders: Order[] = [
  {
    id: '1',
    customerId: 'c1',
    customerName: 'John Smith',
    customerEmail: 'john.smith@example.com',
    items: [
      {
        productId: '1',
        productName: 'Royal Oud',
        size: '6ml',
        price: 49.99,
        quantity: 1
      },
      {
        productId: '3',
        productName: 'Saffron Rose',
        size: '3ml',
        price: 27.99,
        quantity: 2
      }
    ],
    totalAmount: 105.97,
    status: 'delivered',
    shippingAddress: '123 Main St, New York, NY 10001',
    createdAt: new Date('2023-06-10'),
    updatedAt: new Date('2023-06-15')
  },
  {
    id: '2',
    customerId: 'c2',
    customerName: 'Emily Johnson',
    customerEmail: 'emily.johnson@example.com',
    items: [
      {
        productId: '2',
        productName: 'Amber Mystique',
        size: '12ml',
        price: 79.99,
        quantity: 1
      }
    ],
    totalAmount: 79.99,
    status: 'shipped',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    createdAt: new Date('2023-06-12'),
    updatedAt: new Date('2023-06-14')
  },
  {
    id: '3',
    customerId: 'c3',
    customerName: 'Michael Brown',
    customerEmail: 'michael.brown@example.com',
    items: [
      {
        productId: '5',
        productName: 'Sandalwood Bliss',
        size: '6ml',
        price: 45.99,
        quantity: 1
      },
      {
        productId: '4',
        productName: 'Musk Seduction',
        size: '3ml',
        price: 22.99,
        quantity: 1
      }
    ],
    totalAmount: 68.98,
    status: 'processing',
    shippingAddress: '789 Pine St, Chicago, IL 60007',
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-06-16')
  },
  {
    id: '4',
    customerId: 'c4',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah.wilson@example.com',
    items: [
      {
        productId: '1',
        productName: 'Royal Oud',
        size: '12ml',
        price: 89.99,
        quantity: 1
      }
    ],
    totalAmount: 89.99,
    status: 'pending',
    shippingAddress: '101 Maple Dr, Houston, TX 77001',
    createdAt: new Date('2023-06-17'),
    updatedAt: new Date('2023-06-17')
  },
  {
    id: '5',
    customerId: 'c5',
    customerName: 'David Lee',
    customerEmail: 'david.lee@example.com',
    items: [
      {
        productId: '3',
        productName: 'Saffron Rose',
        size: '6ml',
        price: 47.99,
        quantity: 1
      },
      {
        productId: '2',
        productName: 'Amber Mystique',
        size: '3ml',
        price: 24.99,
        quantity: 2
      }
    ],
    totalAmount: 97.97,
    status: 'pending',
    shippingAddress: '202 Cedar Ln, Miami, FL 33101',
    createdAt: new Date('2023-06-18'),
    updatedAt: new Date('2023-06-18')
  }
];

// Sample review data
export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Royal Oud',
    customerId: 'c1',
    customerName: 'John Smith',
    rating: 5,
    comment: 'Absolutely love this fragrance! Long-lasting and gets many compliments.',
    status: 'approved',
    createdAt: new Date('2023-06-20'),
    updatedAt: new Date('2023-06-21')
  },
  {
    id: '2',
    productId: '2',
    productName: 'Amber Mystique',
    customerId: 'c2',
    customerName: 'Emily Johnson',
    rating: 4,
    comment: 'Beautiful scent, but doesn\'t last as long as I hoped.',
    status: 'approved',
    createdAt: new Date('2023-06-22'),
    updatedAt: new Date('2023-06-23')
  },
  {
    id: '3',
    productId: '3',
    productName: 'Saffron Rose',
    customerId: 'c3',
    customerName: 'Michael Brown',
    rating: 5,
    comment: 'Unique and sophisticated fragrance. Worth every penny!',
    status: 'pending',
    createdAt: new Date('2023-06-24'),
    updatedAt: new Date('2023-06-24')
  },
  {
    id: '4',
    productId: '4',
    productName: 'Musk Seduction',
    customerId: 'c4',
    customerName: 'Sarah Wilson',
    rating: 3,
    comment: 'Nice scent but too strong for my taste.',
    status: 'pending',
    createdAt: new Date('2023-06-25'),
    updatedAt: new Date('2023-06-25')
  },
  {
    id: '5',
    productId: '5',
    productName: 'Sandalwood Bliss',
    customerId: 'c5',
    customerName: 'David Lee',
    rating: 4,
    comment: 'Calming and pleasant. Great for everyday use.',
    status: 'rejected',
    createdAt: new Date('2023-06-26'),
    updatedAt: new Date('2023-06-27')
  }
];

// Sample customer queries
export const customerQueries: CustomerQuery[] = [
  {
    id: '1',
    customerId: 'c1',
    customerName: 'John Smith',
    customerEmail: 'john.smith@example.com',
    subject: 'Order Delivery Question',
    message: 'When can I expect my order to be delivered? It\'s been a week since I placed it.',
    response: 'Your order has been shipped and should arrive within 2-3 business days. You can track it using the tracking number sent to your email.',
    status: 'answered',
    createdAt: new Date('2023-06-28'),
    updatedAt: new Date('2023-06-29')
  },
  {
    id: '2',
    customerId: 'c2',
    customerName: 'Emily Johnson',
    customerEmail: 'emily.johnson@example.com',
    subject: 'Product Recommendation',
    message: 'Can you recommend a fragrance similar to Amber Mystique but with better longevity?',
    status: 'pending',
    createdAt: new Date('2023-06-30'),
    updatedAt: new Date('2023-06-30')
  },
  {
    id: '3',
    customerId: 'c3',
    customerName: 'Michael Brown',
    customerEmail: 'michael.brown@example.com',
    subject: 'Return Policy',
    message: 'What is your return policy for opened products if I don\'t like the fragrance?',
    status: 'pending',
    createdAt: new Date('2023-07-01'),
    updatedAt: new Date('2023-07-01')
  },
  {
    id: '4',
    customerId: 'c4',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah.wilson@example.com',
    subject: 'Bulk Order Inquiry',
    message: 'Do you offer discounts for bulk orders? I\'m interested in purchasing for corporate gifts.',
    response: 'Yes, we do offer discounts for bulk orders. For corporate gifts, we can also provide custom packaging. Please let us know the quantity you\'re interested in, and we\'ll provide a quote.',
    status: 'answered',
    createdAt: new Date('2023-07-02'),
    updatedAt: new Date('2023-07-03')
  },
  {
    id: '5',
    customerId: 'c5',
    customerName: 'David Lee',
    customerEmail: 'david.lee@example.com',
    subject: 'International Shipping',
    message: 'Do you ship to Australia? If so, what are the shipping costs and delivery times?',
    status: 'pending',
    createdAt: new Date('2023-07-04'),
    updatedAt: new Date('2023-07-04')
  }
];

// Dashboard statistics
export const dashboardStats: DashboardStats = {
  totalProducts: products.length,
  totalOrders: orders.length,
  pendingOrders: orders.filter(order => order.status === 'pending').length,
  totalRevenue: orders.reduce((sum, order) => sum + order.totalAmount, 0),
  lowStockProducts: products.filter(product => 
    product.sizes.some(size => size.stock < 10)
  ).length,
  pendingReviews: reviews.filter(review => review.status === 'pending').length,
  pendingQueries: customerQueries.filter(query => query.status === 'pending').length
};

// Helper functions to simulate API calls
export const getProducts = (): Promise<Product[]> => {
  return Promise.resolve(products);
};

export const getProduct = (id: string): Promise<Product | undefined> => {
  return Promise.resolve(products.find(product => product.id === id));
};

export const getOrders = (): Promise<Order[]> => {
  return Promise.resolve(orders);
};

export const getOrder = (id: string): Promise<Order | undefined> => {
  return Promise.resolve(orders.find(order => order.id === id));
};

export const updateOrderStatus = (id: string, status: OrderStatus): Promise<Order | undefined> => {
  const orderIndex = orders.findIndex(order => order.id === id);
  if (orderIndex === -1) return Promise.resolve(undefined);
  
  orders[orderIndex] = {
    ...orders[orderIndex],
    status,
    updatedAt: new Date()
  };
  
  return Promise.resolve(orders[orderIndex]);
};

export const getReviews = (): Promise<Review[]> => {
  return Promise.resolve(reviews);
};

export const updateReviewStatus = (id: string, status: ReviewStatus): Promise<Review | undefined> => {
  const reviewIndex = reviews.findIndex(review => review.id === id);
  if (reviewIndex === -1) return Promise.resolve(undefined);
  
  reviews[reviewIndex] = {
    ...reviews[reviewIndex],
    status,
    updatedAt: new Date()
  };
  
  return Promise.resolve(reviews[reviewIndex]);
};

export const getCustomerQueries = (): Promise<CustomerQuery[]> => {
  return Promise.resolve(customerQueries);
};

export const answerCustomerQuery = (id: string, response: string): Promise<CustomerQuery | undefined> => {
  const queryIndex = customerQueries.findIndex(query => query.id === id);
  if (queryIndex === -1) return Promise.resolve(undefined);
  
  customerQueries[queryIndex] = {
    ...customerQueries[queryIndex],
    response,
    status: 'answered',
    updatedAt: new Date()
  };
  
  return Promise.resolve(customerQueries[queryIndex]);
};

export const getDashboardStats = (): Promise<DashboardStats> => {
  return Promise.resolve(dashboardStats);
};