declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      type: 'credit' | 'debit'
      session_id?: string
    }
  }
}
