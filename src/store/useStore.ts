import { useHomeStore } from './modules/home';
// import useCategoryStore from './modules/category';

export const useStore = () => {
  return {
    home: useHomeStore()
    // category: useHomeStore()
  };
};
