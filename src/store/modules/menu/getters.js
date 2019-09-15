export default {

  categories: state => state.menuItems.map(_ => _.category),

  menuCategory: state => category => state.menuItems
    .filter(_ => _.category === category)[0],

  hasSubcategories: state => (category) => {
    const cat = state.menuItems.filter(_ => _.category === category)[0];
    if (cat !== null && cat !== undefined) {
      const subcat = cat.items[0].category;
      return subcat !== null && subcat !== undefined;
    }
    return false;
  },

  subcategories: state => (categoryName) => {
    const [category] = state.menuItems.filter(_ => _.category === categoryName);
    return category.items.map(_ => _.category);
  },

};
