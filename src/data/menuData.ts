export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MainCategory {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export const menuData: MainCategory[] = [
  {
    id: 'food',
    name: 'FOOD',
    subCategories: [
      {
        id: 'pizza',
        name: 'Pizza',
        items: [
          {
            id: 'margherita',
            name: 'Margherita Pizza',
            price: 14.99,
            description: 'Fresh tomatoes, mozzarella, and basil'
          },
          {
            id: 'pepperoni',
            name: 'Pepperoni Pizza',
            price: 16.99,
            description: 'Classic pepperoni with mozzarella'
          }
        ]
      },
      {
        id: 'salads',
        name: 'Salads',
        items: [
          {
            id: 'caesar',
            name: 'Caesar Salad',
            price: 11.99,
            description: 'Romaine lettuce, croutons, parmesan'
          }
        ]
      },
      {
        id: 'meat',
        name: 'Meat',
        items: [
          {
            id: 'steak',
            name: 'Ribeye Steak',
            price: 29.99,
            description: 'Prime cut ribeye steak'
          }
        ]
      }
    ]
  },
  {
    id: 'drinks',
    name: 'DRINKS',
    subCategories: [
      {
        id: 'soft-drinks',
        name: 'Soft Drinks',
        items: [
          {
            id: 'cola',
            name: 'Cola',
            price: 2.99
          }
        ]
      }
    ]
  }
];