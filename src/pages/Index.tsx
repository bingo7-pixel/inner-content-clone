import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { MenuSidebar } from '@/components/MenuSidebar';
import type { MenuItem } from '@/data/menuData';
import { SidebarProvider } from '@/components/ui/sidebar';

interface OrderItem extends MenuItem {
  quantity: number;
}

const Index = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const { toast } = useToast();

  const addToOrder = (item: MenuItem) => {
    setOrderItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    
    toast({
      title: "Item added",
      description: `${item.name} has been added to your order`,
    });
  };

  const calculateTotal = () => {
    const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.0825;
    const serviceFee = subtotal * 0.03;
    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      serviceFee: serviceFee.toFixed(2),
      total: (subtotal + tax + serviceFee).toFixed(2)
    };
  };

  const handleSendOrder = () => {
    toast({
      title: "Order sent",
      description: "Your order has been sent to the kitchen",
    });
    setOrderItems([]);
  };

  const totals = calculateTotal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6 rounded-lg space-y-4"
        >
          <h2 className="text-xl font-semibold">Order Summary</h2>
          <div className="space-y-4">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${totals.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Tax (8.25%):</span>
              <span>${totals.tax}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Service Fee (3.00%):</span>
              <span>${totals.serviceFee}</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t border-white/10">
              <span>Total:</span>
              <span>${totals.total}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="nav-item px-4 py-2 rounded-md border border-white/10">
              Hold
            </button>
            <button className="nav-item px-4 py-2 rounded-md border border-white/10">
              Stay
            </button>
          </div>
          
          <button 
            onClick={handleSendOrder}
            className="w-full bg-white/10 hover:bg-white/20 transition-colors duration-200 py-3 rounded-md mt-4"
          >
            Send Order
          </button>
        </motion.div>

        {/* Menu Section */}
        <div className="lg:col-span-3">
          <SidebarProvider>
            <MenuSidebar onItemSelect={addToOrder} />
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default Index;