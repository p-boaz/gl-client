import { reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'

const state = reactive(
    localStorage.getItem(storeName)
        ? JSON.parse(localStorage.getItem(storeName))
        : {
        ingredients: [],
        recipes: [],
        },
    )
    watch(state, value => localStorage.setItem(storeName, JSON.stringify(value)))

export const useRecipeStore = defineStore('recipe', () => {
    /**
     * Current name of the user.
     */
    const id = () => `_${Math.random().toString(36).substr(2, 9)}`
    

    const ingredients: computed(() =>
        state.ingredients.sort((a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name)),
    ),
  const recipes: computed(() =>
    state.recipes
      .map((recipe: { ingredients: any[] }) => ({
        ...recipe,
        ingredients: recipe.ingredients.map((ingredient: any) =>
          state.ingredients.find((i: { id: any }) => i.id === ingredient),
        ),
      }))
      .sort((a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name)),
  ),
  const addIngredient: (ingredient: any) => {
    state.ingredients = [
      ...state.ingredients,
      { id: id(), name: ingredient },
    ]
  },
  const removeIngredient: (ingredient: any) => {
    if (
      state: any.recipes: any.some: any(recipe: any =>
        recipe.ingredients.some(i: any => i.id === ingredient.id),
      )
    )
      return
    state.ingredients = state.ingredients.filter(
        (      i: { id: any }) => i.id !== ingredient.id,
    )
  },
  const addRecipe: (recipe: any) => {
    state.recipes = [
      ...state.recipes,
      {
        id: id(),
        ...recipe,
        ingredients: recipe.ingredients.map((i: { id: any }) => i.id),
      },
    ]
  },
  const removeRecipe: (recipe: any) => {
    state.recipes = state.recipes.filter((r: { id: any }) => r.id !== recipe.id)
  },
})
