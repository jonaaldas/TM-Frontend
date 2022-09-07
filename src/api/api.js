import axios from 'axios'

const url = 'https://tranmanagment.adaptable.app/'
export const getTransactionsRequest = async () => {
  return await axios.get(url +'/api/transactions')
}

export const createTransactionsRequest = async (post) => {
  return await axios.post(url + '/api/transactions/add/', post)
}

export const archiveTransactionRequest = async (id) => {
  return await axios.delete(url + '/api/transactions/' + id)
}

export const deleteTransactionRequest = async (id) => {
  return await axios.delete(url +'/delete/' + id)
}

export const getSingleTransactionToEditRequest = async (id) => {
  return await axios.get(url +'/api/transactions/edit/' + id)
}

export const getSingleTransactionToViewRequest = async (id) => {
  return await axios.get(url +'/api/transactions/' + id)
}

export const editTransactionRequest = async (id, newFields) => {
  return await axios.put(url +'/api/transactions/' + id, newFields)
}


export const getAllArchivedTransactionsRequest = async () => {
  return await axios.get(url +'/api/transactions/archived')
}

export const restoreASingleTransactionRequest = async (id) => {
  return await axios.get(url +'/api/transactions/restore/archived/' + id)
}