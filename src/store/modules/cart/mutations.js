import * as fs from 'fs';


export default {

  LOAD: (state, items) => {
    state.cartItems = items;
  },

  MATERIALIZE: (state) => {
    fs.readdir('.', (error, files) => {
      if (error) {
        console.error('[ERROR] Loading cart content failed: ', error);
      } else {
        if (!files.includes('saves')) {
          let created = false;
          let tries = 0;
          const handler = (mkdirErr) => {
            if (mkdirErr) {
              console.error(`[ERROR] Creation saves dir failed ${tries} times: `, mkdirErr);
              tries += 1;
            } else {
              created = true;
            }
          };
          while (!created && tries <= 5) {
            fs.mkdir('./saves', handler);
            if (created) {
              break;
            }
          }
          if (!created) {
            return;
          }
        }
        const data = JSON.stringify(state.cartItems, null, 2);
        fs.writeFile('./saves/cart.json', data, (writeError) => {
          if (writeError) {
            console.error('[ERROR] Saving cart.json failed: ', writeError);
          }
        });
      }
    });
  },

  ADD_ITEM: (state, order) => {
    const itemsMap = new Map(state.cartItems);
    const amount = itemsMap.get(order.item);
    itemsMap.set(order.item, (amount || 0) + order.amount);
    state.cartItems = Array.from(itemsMap);
  },

  REMOVE_ITEM: (state, item) => {
    const itemsMap = new Map(state.cartItems);
    if (itemsMap.has(item)) {
      const amount = itemsMap.get(item);
      if (amount - 1 > 0) {
        itemsMap.set(item, amount - 1);
      } else {
        itemsMap.delete(item);
      }
    }
    state.cartItems = Array.from(itemsMap);
  },

};
