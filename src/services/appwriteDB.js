import { databases } from './appwriteConfig';
import { ID, Query } from 'appwrite';

const database_id = import.meta.env.VITE_APPWRITE_DATABASE_ID;

export const createDocument = async (userId, data, collection_id) => {
  if (!userId || typeof userId !== 'string' || userId.trim() === '') {
    throw new Error("User ID is required to set permissions.");
  }

  try {
    return await databases.createDocument(
      database_id,
      collection_id,
      ID.unique(),
      { userId, ...data },
    );
  } catch (error) {
    console.error("createDocument error", error);
    throw error;
  }
};

export const createDocumentWithoutUserId = async (data, collection_id) => {
  try {
    return await databases.createDocument(
      database_id,
      collection_id,
      ID.unique(),
      { ...data },
    );
  } catch (error) {
    console.error("createDocument error", error);
    throw error;
  }
};

export const getAllDocuments = async (collection_id) => {
  try {
    const response = await databases.listDocuments(
      database_id,
      collection_id
    );
    return response.documents;
  } catch (error) {
    console.error("getAllDocuments error", error);
    throw error;
  }
};

export const getUserDocument = async (collection_id, userId) => {
  try {
    const response = await databases.listDocuments(
      database_id,
      collection_id,
      [Query.equal("userId", [userId])]
    );
    return response.documents[0] || null;
  } catch (error) {
    console.error("Error fetching user document:", error);
    return null;
  }
};

export const getDocumentById = async (collection_id, documentId) => {
  try {
    const response = await databases.getDocument(
      database_id,
      collection_id,
      documentId
    );
    return response;
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
};

export const updateDocument = async (collection_id, documentId, data) => {
  try {
    const response = await databases.updateDocument(
      database_id,
      collection_id,
      documentId,
      data
    );
    return response;
  } catch (error) {
    console.error("updateDocument error", error);
    throw error;
  }
};

export const deleteDocument = async (collection_id, documentId) => {
  try {
    const response = await databases.deleteDocument(
      database_id,
      collection_id,
      documentId
    );
    return response;
  } catch (error) {
    console.error("deleteDocument error", error);
    throw error;
  }
};
