import { defineStore } from 'pinia'
import getAccounts from '@/stores/getAccounts'

// Uses pinia to store accounts list
export const useAccountStore = defineStore('accounts', {
  state: () => ({
    accounts: [],
  }),
  actions: {
    async fetchAccounts() {
      try {
        const response = await getAccounts.getAccounts()
        this.accounts = response.data
      } catch (error) {
        console.error('Error fetching accounts:', error)
      }
    }
  }
})
