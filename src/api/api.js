import axios from 'axios'

export const getTransactionsRequest = async () => {
  return await axios.get('api/transactions')
}

export const createTransactionsRequest = async (post) => {
  return await axios.post('/api/transactions/add/', post)
}

export const archiveTransactionRequest = async (id) => {
  return await axios.delete('/api/transactions/' + id)
}

export const deleteTransactionRequest = async (id) => {
  return await axios.delete('/delete/' + id)
}

export const getSingleTransactionToEditRequest = async (id) => {
  return await axios.get('/api/transactions/edit/' + id)
}

export const getSingleTransactionToViewRequest = async (id) => {
  return await axios.get('/api/transactions/' + id)
}

export const editTransactionRequest = async (id, newFields) => {
  return await axios.put('/api/transactions/' + id, newFields)
}


export const getAllArchivedTransactionsRequest = async () => {
  return await axios.get('/api/transactions/archived')
}

export const restoreASingleTransactionRequest = async (id) => {
  return await axios.get('/api/transactions/restore/archived/' + id)
}