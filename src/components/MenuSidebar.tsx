import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuData, MainCategory, SubCategory, MenuItem } from '@/data/menuData';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface MenuSidebarProps {
  onItemSelect: (item: MenuItem) => void;
}

export const MenuSidebar = ({ onItemSelect }: MenuSidebarProps) => {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  return (
    <div className="flex">
      {/* Main Categories Sidebar */}
      <Sidebar className="w-64 border-r border-white/10">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {menuData.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full ${
                      selectedCategory?.id === category.id ? 'bg-white/10' : ''
                    }`}
                  >
                    {category.name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Sub Categories Sidebar */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-64 border-r border-white/10"
        >
          <Sidebar>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  {selectedCategory.subCategories.map((subCategory) => (
                    <SidebarMenuItem key={subCategory.id}>
                      <SidebarMenuButton
                        onClick={() => setSelectedSubCategory(subCategory)}
                        className={`w-full ${
                          selectedSubCategory?.id === subCategory.id ? 'bg-white/10' : ''
                        }`}
                      >
                        {subCategory.name}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </motion.div>
      )}

      {/* Items Display */}
      {selectedSubCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedSubCategory.items.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4 rounded-lg cursor-pointer"
                onClick={() => onItemSelect(item)}
              >
                <h3 className="font-medium">{item.name}</h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                )}
                <p className="mt-2 font-semibold">${item.price.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};